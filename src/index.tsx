import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./context/auth-context";
import React from "react";

export const REMOTE_API =
  "https://react-http-9cf69-default-rtdb.europe-west1.firebasedatabase.app/";
export const INGREDIENTS_API = `${REMOTE_API}ingredients.json`;

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
