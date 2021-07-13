import React from "react";
import { Link } from "react-router-dom";
import Search from "./search";
import UserSessionContainer from "./user_session_container";
import CartIcon from "../cart/cart_icon";
import CategoryNav from "./category_nav";

export default function NavBar() {
  return (
    <div className="nav-container">
      <header>
        <div className="nav-bar">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="header-link"
            replace
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
          <UserSessionContainer />
          <CartIcon />
        </div>
      </header>
      <CategoryNav />
    </div>
  );
}
