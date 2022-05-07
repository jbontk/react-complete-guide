import Input from "../components/UI/Input";
import {isEmail, isNotEmpty} from "./validation-rules";

const buildFormItem = (id, label, type, validationRules = []) => ({
    render: ((changeHandler, blurHandler, value, isValid, errorMessage) => <Input key={id} label={label} valid={isValid} errorMessage={errorMessage}
                                                                   input={{id: id, name: id, type: type, onChange: changeHandler, value: value, onBlur: blurHandler }}/>),
    validationRules: validationRules,
    value: ''
})

const orderFormConfig =
    {
        fullName: buildFormItem('fullName', 'Full name', 'text', [isNotEmpty]),
        email: buildFormItem('email', 'Email', 'email', [isNotEmpty, isEmail])
    };

export default orderFormConfig;