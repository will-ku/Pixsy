import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { openModal } from "../../actions/modal_actions";

export default function CartIcon() {
  const cartItems = useSelector((state) => state.entities.cartItems);
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const loginLink = () => dispatch(openModal("login"));

  const linkToCheckout = () => {
    if (currentUser) {
      return (
        <Link to={`/checkout/${currentUser.id}`}>
          <TiShoppingCart size={27} />
          {Object.keys(cartItems).length === 0
            ? null
            : Object.keys(cartItems).length}
        </Link>
      );
    } else
      return (
        <div onClick={loginLink}>
          <TiShoppingCart size={27} />
          {Object.keys(cartItems).length === 0
            ? null
            : Object.keys(cartItems).length}
        </div>
      );
  };

  return <div className="cart-icon">{linkToCheckout()}</div>;
}
