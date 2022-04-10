import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  console.log('log re-render');

  //
  // Name Input
  //
  const {
    value: enteredName,
    hasErrors: nameHasErrors,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput((v) => v.trim() !== '');
  const nameInputClasses = nameHasErrors
    ? 'form-control invalid'
    : 'form-control';

  //
  // Email input
  //
  const {
    value: enteredEmail,
    hasErrors: emailHasErrors,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput((v) => v.includes('@'));

  const emailInputClasses = emailHasErrors
    ? 'form-control invalid'
    : 'form-control';

  //
  // Form
  //
  let formIsValid = false;

  if (!nameHasErrors && !emailHasErrors) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    nameBlurHandler();
    emailBlurHandler();

    if (nameHasErrors || emailHasErrors) {
      return;
    }

    console.log(enteredName, enteredEmail);

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          value={enteredName}
          onBlur={nameBlurHandler}
        />
        {nameHasErrors && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailHasErrors && (
          <p className='error-text'>Email must be a valid email address.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
