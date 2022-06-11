import React, {useCallback, useEffect} from 'react';
import {useState} from "react";

let logoutTimer;

const retrieveStoredToken = () => {
    const token = localStorage.getItem('token');
    const expirationTimeMs = localStorage.getItem('expirationTimeMs');

    const remainingDurationMs = calculateRemainingDurationMs(expirationTimeMs);

    const thresholdMs = 60000;
    if (remainingDurationMs <= thresholdMs) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTimeMs');
        return null;
    } else {
        return {token, remainingDurationMs};
    }
}

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token, expirationTimeMs) => {
    },
    logout: () => {
    }
});

const calculateRemainingDurationMs = expirationTimeMs => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(+expirationTimeMs).getTime();

    return adjExpirationTime - currentTime;
}

export const AuthContextProvider = props => {
    const tokenData = retrieveStoredToken();
    const [token, setToken] = useState(tokenData?.token);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTimeMs) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTimeMs', expirationTimeMs);

        const remainingDurationMs = calculateRemainingDurationMs(expirationTimeMs);

        console.log(`Token expires at: ${new Date(expirationTimeMs)}, i.e. ${remainingDurationMs}ms`);

        console.log('Setting timeout callback from login function');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
        logoutTimer = setTimeout(() => {
            console.log('Calling timeout callback set inside login handler');
            logoutHandler();
        }, remainingDurationMs)

    };

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTimeMs');

        if (logoutTimer) {
            console.log('Clearing timeout callback');
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.remainingDurationMs);
            console.log('Setting timeout callback from component');
            if (logoutTimer) {
                clearTimeout(logoutTimer);
            }
            logoutTimer = setTimeout(() => {
                console.log('Calling timeout callback set inside component');
                logoutHandler();
            }, tokenData.remainingDurationMs)
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: userIsLoggedIn
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;