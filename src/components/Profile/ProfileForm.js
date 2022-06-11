import classes from './ProfileForm.module.css';
import {useContext, useRef} from "react";
import {FIREBASE_API_KEY} from "../../constants";
import AuthContext from "../../store/auth-context";
import {useNavigate} from "react-router-dom";

const ProfileForm = () => {

  const navigate = useNavigate();

  const passwordRef = useRef();
    const authCtx = useContext(AuthContext);

  const submitHandler = e => {
      e.preventDefault();

      const password = passwordRef.current.value;

      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_API_KEY}`,
          {
              body:  JSON.stringify({
                  idToken: authCtx.token,
                  returnSecureToken: false,
                  password
              }),
              headers: {'Content-Type': 'application/json'},
              method: 'POST'
          })
          .then(r => {
              if (r.ok) {
                  return r.json()
              }
              else {
                  return r.json().then(d => {
                      let errorMessage = 'Change password failure';
                      if (d?.error?.message) {
                          errorMessage = d.error.message;
                      }
                      throw new Error(errorMessage);
                  })
              }
          })
          .then(_ => navigate('/', {replace: true}))
          .catch(e => alert(e?.message || e));

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
