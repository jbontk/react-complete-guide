import {useState} from "react";

const useForm = (formConfig) => {
    const [form, setForm] = useState(formConfig);

    const renderForm = () => Object.values(form).map(f => f.render(onInputChange, onInputBlur, f.value, f.isValid, f.errorMessage));

    const onInputChange = (event) => {
        const {name, value} = event.currentTarget;
        console.log('name: ' + name + ', value: ' + value);

        let isValid = false;
        let  errorMessage = '';

        setForm(prev => ({...prev, [name]: {...prev[name], value, isValid, errorMessage} }));
        console.log(JSON.stringify(form));
    }

    const onInputBlur = (event) => {
        const {name} = event.currentTarget;

        const {value, validationRules} = form[name];

        let isValid = true;
        let errorMessage = '';
        for (let i = 0; i < validationRules.length; i++) {
            const rule = validationRules[i];
            if (!rule.apply(value)) {
                isValid = false;
                errorMessage = rule.errorMessage;
                break;
            }
        }

        setForm(prev => ({...prev, [name]: {...prev[name], isValid, errorMessage} }));
    }

    const formIsValid = Object.values(form).every(f => f.isValid);

    return [renderForm, formIsValid];
}

export default useForm;