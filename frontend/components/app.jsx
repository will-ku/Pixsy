import React from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import UserSession from "./nav_bar/user_session_container";
import Search from "../components/nav_bar/search";
import SplashContainer from "./products/splash_container";
import ProductShowContainer from "./products/product_show_container";
import CategoryNav from "./nav_bar/category_nav";
import CartIcon from "./cart/cart_icon";
import Checkout from "./cart/checkout";
import { ProtectedRoute } from "../util/route_util";
import CategoryShow from "./products/category_show";

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
            <img
              className="pixsy-logo"
              src={window.pixsylogoURL}
              alt="Pixsy"
              height="45"
              width="90"
            />
          </Link>
          <Search />
          <UserSession />
          <CartIcon />
        </div>
      </header>
      <CategoryNav />
    </div>
    <Switch>
      <Route exact path="/" component={SplashContainer}></Route>
      <Route
        exact
        path="/products/:productId"
        component={ProductShowContainer}
      />
      <Route
        exact
        path="/category/:categoryId"
        component={CategoryShow}
      ></Route>
      <ProtectedRoute exact path="/checkout/:userId" component={Checkout} />
      {/* <Redirect to="/" /> */}
    </Switch>
  </>
);

export default App;
