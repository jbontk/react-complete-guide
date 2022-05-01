import useForm from "../../hooks/use-form";
import orderFormConfig from "../../utils/order-form-config";
import Modal from "../UI/Modal";

const OrderForm = (props) => {
    const [renderForm, formIsValid] = useForm(orderFormConfig);

    return <Modal onClose={props.onClose}>
        {renderForm()}
        <button disabled={!formIsValid}>Submit order</button>
    </Modal>

};

export default OrderForm;