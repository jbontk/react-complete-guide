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

export const AuthContextProvider = props => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const userIsLoggedIn = !!token;

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    const loginHandler = token => {
        setToken(token);
        localStorage.setItem('token', token);
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