import actionButtonClasses from '../UI/ActionButton.module.css'
import classes from './OrderForm.module.css';
import useForm from "../../hooks/use-form";
import orderFormConfig from "../../utils/order-form-config";
import Modal from "../UI/Modal";

const OrderForm = (props) => {
    const [renderForm, formIsValid] = useForm(orderFormConfig);

    console.log(`formIsValid is: ${formIsValid}`)

    return <Modal onClose={props.onClose}>
        <div className={classes.orderForm}>
            {renderForm()}
        </div>
        <div className={actionButtonClasses.actions}>
            <button className={actionButtonClasses['button-alt']} onClick={props.onClose}>Close</button>
            <button className={actionButtonClasses['button-alt']} onClick={props.onBackToCart}>Back to Your Cart</button>
            <button className={actionButtonClasses.button} disabled={!formIsValid}>Submit order</button>
        </div>
    </Modal>

};

export default OrderForm;