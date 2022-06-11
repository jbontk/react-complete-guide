import React from 'react';
import {useState} from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: token => {
    },
    logout: () => {
    }
});

const calculateRemaingDuration = expirationTime => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();

    return adjExpirationTime - currentTime;
}

export const AuthContextProvider = props => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const userIsLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);

        const remainingDuration = calculateRemaingDuration(expirationTime);

        console.log(`Token expires at: ${new Date(expirationTime)}, i.e. in ${remainingDuration}ms`);

        setTimeout(logoutHandler, remainingDuration);
    };

    const contextValue = {
        token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: userIsLoggedIn
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;