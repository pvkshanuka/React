import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { Fragment, useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {

  const ctx = useContext(AuthContext)

  return (
    <Fragment>
      <MainHeader />
      <main>
        {/*In below senores we directly use passing prop methods in components */}
        {!ctx.isLoggedIn && <Login onLogin={ctx.loginHandler} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
