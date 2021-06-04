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
import UserSessionNav from "./nav_bar/user_session_nav_container";
import Search from "../components/nav_bar/search";
import ProductIndexContainer from "../components/products/product_index_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }} className="header-link">
          <h1>Pixsy</h1>
        </Link>
        <Search />
        <UserSessionNav />
      </div>
    </header>
    <Switch>
      <Route exact path="/" component={ProductIndexContainer} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
