import React from "react";
import { useSelector, useRef, useState } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { fetchAllCartItems } from "../../actions/cart_item_actions";
import { Link } from "react-router-dom";
import Checkout from "./checkout";

export default function CartIcon() {
  const cartItems = useSelector((state) => state.entities.cartItems);
  const currentUser = useSelector((state) => state.session.currentUser);

  const linkToCheckout = () => {
    if (currentUser) {
      return (
        <Link to={`checkout/${currentUser.id}`}>
          <TiShoppingCart size={27} />
          {Object.keys(cartItems).length === 0
            ? null
            : Object.keys(cartItems).length}
        </Link>
      );
    } else
      return (
        <div>
          <TiShoppingCart size={27} />
          {Object.keys(cartItems).length === 0
            ? null
            : Object.keys(cartItems).length}
        </div>
      );
  };

  return <div className="cart-icon">{linkToCheckout()}</div>;
}
