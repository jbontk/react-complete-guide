import {useState} from "react";

const useForm = (formConfig) => {
    const [form, setForm] = useState(formConfig);

    const renderForm = () => Object.values(form).forEach(f => f.render(onInputChange));

    const onInputChange = (event) => {
        const {name, value} = event.currentTarget;

    }

    const formIsValid = false;

    return [renderForm, formIsValid];
}

export default useForm;