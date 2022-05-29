import classes from './Checkout.module.css';
import {useRef, useState} from "react";

const isEmpty = v => v?.trim() === '';
const isAtLeastFiveChars = v => v.trim().length >= 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value;
        const enteredCity = cityRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isAtLeastFiveChars(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${!formInputsValidity.name ? classes.invalid : ''}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
                {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${!formInputsValidity.street ? classes.invalid : ''}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!formInputsValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={`${classes.control} ${!formInputsValidity.postal ? classes.invalid : ''}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
                {!formInputsValidity.postal && <p>Please enter a valid postal code (5 characters at least)!</p>}
            </div>
            <div className={`${classes.control} ${!formInputsValidity.city ? classes.invalid : ''}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!formInputsValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;