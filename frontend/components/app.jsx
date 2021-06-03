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

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Pixsy</h1>
      </Link>
      <h3 className="search-bar">Search Bar</h3>
      <UserSessionNav />
    </header>
  </div>
);

export default App;
