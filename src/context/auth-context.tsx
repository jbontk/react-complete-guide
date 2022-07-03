import React, { useState } from "react";
import { DefaultProps } from "../components/UI/Card";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
});

const AuthContextProvider = (props: DefaultProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);
  
  return <AuthContext.Provider value={{isAuthenticated, login}}>{props.children}</AuthContext.Provider>;
};


export default AuthContextProvider;
