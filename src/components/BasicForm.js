import useInput from '../hooks/use-input';
import ErrorComponent from './ErrorComponent';

const BasicForm = (props) => {
  //
  // Inputs
  //
  const {
    value: firstName,
    hasErrors: firstNameHasErrors,
    valueChangeHandler: firstNameChanged,
    inputBlurHandler: firstNameBlur,
    reset: firstNameReset,
  } = useInput((v) => v?.trim().length > 0);
  const {
    value: lastName,
    hasErrors: lastNameHasErrors,
    valueChangeHandler: lastNameChanged,
    inputBlurHandler: lastNameBlur,
    reset: lastNameReset,
  } = useInput((v) => v?.trim().length > 0);
  const {
    value: email,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChanged,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInput((v) => v?.includes('@'));

  //
  // CSS classes
  //
  const getCssClasses = (hasErrors) =>
    hasErrors ? 'form-control invalid' : 'form-control';
  const firstNameClasses = getCssClasses(firstNameHasErrors);
  const lastNameClasses = getCssClasses(lastNameHasErrors);
  const emailClasses = getCssClasses(emailHasErrors);

  //
  // Submit Form
  //
  const submitFormHandler = (e) => {
    e.preventDefault();

    //
    // Call blur
    //
    firstNameBlur();
    lastNameBlur();
    emailBlur();

    //
    // Validate
    //
    if (firstNameHasErrors || lastNameHasErrors || emailHasErrors) {
      return;
    }

    console.log({ firstName, lastName, email });

    //
    // Reset form
    //
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={firstNameChanged}
            onBlur={firstNameBlur}
          />
          {firstNameHasErrors && (
            <ErrorComponent>First name must not be empty</ErrorComponent>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={lastNameChanged}
            onBlur={lastNameBlur}
          />
          {lastNameHasErrors && (
            <ErrorComponent>Last name must not be empty</ErrorComponent>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChanged}
          onBlur={emailBlur}
        />
        {emailHasErrors && (
          <ErrorComponent>
            Email name must be a valid email address
          </ErrorComponent>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
