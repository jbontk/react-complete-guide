import {useContext, useRef, useState} from 'react';

import classes from './AuthForm.module.css';
import {FIREBASE_API_KEY} from "../../constants";
import AuthContext from "../../store/auth-context";
import {useNavigate} from "react-router-dom";

const AuthForm = () => {

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const [signIn, setSignIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const authCtx = useContext(AuthContext);

    const submitHandler = e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        setIsLoading(true);

        //
        // sign-in or sign-up
        //
        const url = signIn
            ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
            : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;

        fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({email, password, returnSecureToken: true}),
                headers: {'Content-Type': 'application/json'}
            })
            .then(r => {
                if (!r.ok) {
                    //
                    // Error
                    //
                    return r.json().then(j => {
                        let errorMessage = 'Authentication failed:';
                        if (j?.error?.message) {
                            errorMessage = j.error.message;
                        }
                        throw new Error(errorMessage);
                    });
                } else {
                    //
                    // Success
                    //
                    return r.json();
                }
            })
            .then(data => authCtx.login(data.idToken, new Date().getTime() + data.expiresIn * 1000))
            .then(_ => navigate('/', { replace: true}))
            .catch(e => alert(e.message))
            .finally(() => {
                setIsLoading(false);
            });

    }


    const switchAuthModeHandler = () => {
        setSignIn((prevState) => !prevState);
    };

    return (
        <section className={classes.auth}>
            <h1>{signIn ? 'Sign In' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' id='password' required ref={passwordRef}/>
                </div>
                <div className={classes.actions}>
                    {!isLoading && <button>{signIn ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request...</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {signIn ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
