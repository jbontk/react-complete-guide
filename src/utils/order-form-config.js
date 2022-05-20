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
        firstName: buildFormItem('firstName', 'First name', 'text', [isNotEmpty]),
        lastName: buildFormItem('lastName', 'Last name', 'text', [isNotEmpty]),
        email: buildFormItem('email', 'Email', 'email', [isNotEmpty, isEmail]),
        address: buildFormItem('address', 'Address', 'text', [isNotEmpty]),
        city: buildFormItem('city', 'City', 'text', [isNotEmpty]),
        postCode: buildFormItem('postCode', 'Postal Code', 'number', [isNotEmpty])
    };

export default orderFormConfig;