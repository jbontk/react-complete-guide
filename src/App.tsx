import { useContext } from "react";
import Auth from "./components/Auth";
import Ingredients from "./components/Ingredients/Ingredients";
import { AuthContext } from "./context/auth-context";

const App = () => {

  const ctx = useContext(AuthContext);

  let content = <Auth onLogin={ctx.login} />
  if (ctx.isAuthenticated) {
    content = <Ingredients />;
  }

  return content;
};

export default App;
