import actionButtonClasses from '../UI/ActionButton.module.css'
import classes from './OrderForm.module.css';
import useForm from "../../hooks/use-form";
import orderFormConfig from "../../utils/order-form-config";
import Modal from "../UI/Modal";
import useHttp from "../../hooks/use-http";
import {ORDERS_API} from "../../Constants";
import CartContext from "../../store/cart-context";
import {useContext} from "react";

const OrderForm = (props) => {
    //
    // USE FORM
    //
    const [renderForm, formIsValid, form] = useForm(orderFormConfig);
    console.log(`formIsValid is: ${formIsValid}`)

    //
    // USE CONTEXT to know what cart data we need to send
    //
    const cartCtx = useContext(CartContext);

    //
    // USE HTTP for POSTing the order
    //
    const {isLoading: orderInProgress, error, sendRequest: sendOrder} = useHttp();

    //
    // Order submission
    //
    const submitHandler = async (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        // Build address object
        const address = Object.keys(form).reduce((transformedAddressObject, currentKey) => {
            transformedAddressObject[currentKey] = form[currentKey].value;
            return transformedAddressObject;
        }, {});

        // Build cart object
        const cartItems = cartCtx.items;
        const cart = Object.keys(cartItems).reduce((transformedCart, currentKey) => {
            const {id, amount, price, name} = cartItems[currentKey];
            transformedCart[id] = {amount, price, name};
            return transformedCart;
        }, {});

        // Send
        await sendOrder({
            url: ORDERS_API,
            method: 'POST',
            body: {address, order: cart}
        }, (response) => console.log(`Received response ${JSON.stringify(response)}`));

        if (!error) {
            cartCtx.clear();
            props.onClose();
            // display success message
        }
    };

    return <Modal onClose={props.onClose}>
        <form onSubmit={submitHandler}>
            <div className={classes.orderForm}>
                {renderForm()}
            </div>
            <div className={actionButtonClasses.actions}>
                <button className={actionButtonClasses['button-alt']} onClick={props.onClose}>Close</button>
                <button className={actionButtonClasses['button-alt']} onClick={props.onBackToCart}>Back to Your Cart
                </button>
                <button className={actionButtonClasses.button} disabled={!formIsValid || orderInProgress}>Submit order</button>
            </div>
            <div>{!!error && 'An error occurred while submitting the form: ' + error}</div>
        </form>
    </Modal>

};

export default OrderForm;