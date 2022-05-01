import Input from "../components/UI/Input";

const buildFormItem = (id, label, type, value = '') => ({
    render: ((changeHandler) => <Input label={label} input={{id: {id}, name: {id}, type: {type}, onChange:{changeHandler}, value: {value} }}/>),
    validationRules: []
})

const orderFormConfig =
    {
        fullName: buildFormItem('fullName', 'Full name', 'text'),
        email: buildFormItem('email', 'Email', 'email')
    };

export default orderFormConfig;