import React from "react";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { fetchAllCartItems } from "../../actions/cart_item_actions";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const cartItems = useSelector((state) => state.entities.cartItems);
  const currentUser = useSelector((state) => state.session.currentUser);

  return (
    <div className="cart-icon">
      <TiShoppingCart size={27} />
      {Object.keys(cartItems).length}
    </div>
  );
}
