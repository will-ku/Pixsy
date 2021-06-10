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
            {/* <img
              src={require("../../app/assets/images/PixsyLogo.svg")}
              alt="Pixsy Logo"
            /> */}

            <img
              src="https://pixsy-dev.s3.us-east-2.amazonaws.com/pixsypng.png"
              alt="Pixsy"
              height="45"
              width="85"
            />
          </Link>
          <Search />
          <UserSession />
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
