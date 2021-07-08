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
  const cartCount = () =>
    Object.keys(cartItems).length === 0 ? null : (
      <p className="cart-count">{Object.keys(cartItems).length}</p>
    );

  const linkToCheckout = () => {
    if (currentUser) {
      return (
        <Link className="cart-link" to={`/checkout/${currentUser.id}`}>
          <span className="cart-icon">
            <TiShoppingCart size={27} className="cart-svg" color="black" />
            {cartCount()}
          </span>
        </Link>
      );
    }
  };

  const linkToLogin = () => {
    return (
      <span className="cart-icon" onClick={loginLink}>
        <TiShoppingCart size={27} color="black" className="cart-svg" />
      </span>
    );
  };

  return <div>{currentUser ? linkToCheckout() : linkToLogin()}</div>;
}
