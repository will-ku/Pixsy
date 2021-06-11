import React from "react";
import {
  Route,
  Link,
  NavLink,
  HashRouter,
  Redirect,
  Switch,
} from "react-router-dom";
import Modal from "./modal/modal";
import UserSession from "./nav_bar/user_session_container";
import Search from "../components/nav_bar/search";
import SplashContainer from "./products/splash_container";
import ProductShowContainer from "./products/product_show_container";
import CartIconContainer from "./cart/cart_icon";

const App = () => (
  <>
    <Modal />
    <div className="nav-container">
      <header>
        <div className="nav-bar">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="header-link"
          >
            <img src={window.pixsylogoURL} alt="Pixsy" height="45" width="90" />
          </Link>
          <Search />
          <UserSession />
          <CartIconContainer />
        </div>
      </header>
    </div>

    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
