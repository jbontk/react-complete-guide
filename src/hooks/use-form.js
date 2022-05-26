import {useState} from "react";

const useForm = (formConfig) => {
    const [form, setForm] = useState(formConfig);

    const renderForm = () => Object.values(form).map(f => f.render(onInputChange, onInputBlur, f.value, f.isValid, f.errorMessage));

    const validate = (name, value) => {
        const {validationRules} = form[name];

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

        return [isValid, errorMessage];
    };

    const onInputChange = (event) => {
        const {name, value} = event.currentTarget;
        console.log('name: ' + name + ', value: ' + value);

        const [isValid, errorMessage] = validate(name, value); // pass the value from the event
        setForm(prev => ({...prev, [name]: {...prev[name], value, isValid, errorMessage} }));
        console.log(JSON.stringify(form));
    };

    const onInputBlur = (event) => {
        const {name} = event.currentTarget;

        const [isValid, errorMessage] = validate(name, form[name].value); // pass the current value set in the form
        setForm(prev => ({...prev, [name]: {...prev[name], isValid, errorMessage} }));
    };

    const formIsValid = Object.values(form).every(f => f.isValid);

    return [renderForm, formIsValid, form];
}

export default useForm;