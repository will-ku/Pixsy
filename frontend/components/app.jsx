import React from "react";
import { Route, Switch } from "react-router-dom";
import Modal from "./modal/modal";
import SplashContainer from "./products/splash_container";
import ProductShowContainer from "./products/product_show_container";
import Checkout from "./cart/checkout";
import { ProtectedRoute } from "../util/route_util";
import CategoryShow from "./products/category_show";
import NavBar from "./nav_bar/nav_bar";

const App = () => (
  <>
    <Modal />
    <NavBar />
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
    </Switch>
  </>
);

export default App;
