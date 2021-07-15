import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./checkout_item";
import { Link } from "react-router-dom";
import { IoLeaf } from "react-icons/io5";
import CheckoutSummary from "./checkout_summary";

export default function Checkout() {
  const cartItems = useSelector((state) => state.entities.cartItems);

  const itemOrItems = () => {
    if (Object.keys(cartItems).length === 1) return "1 item in your cart";
    else {
      return `${Object.keys(cartItems).length} items in your cart`;
    }
  };

  const subtotal = Object.values(cartItems).reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.productPrice;
  }, 0);

  return (
    <div className="checkout-page">
      {Object.keys(cartItems).length === 0 ? (
        <div className="empty-cart-container">
          <h1>Your cart is empty.</h1>
          <Link to="/">Discover something unique to fill it up</Link>
        </div>
      ) : (
        <div className="checkout-container">
          <div className="checkout-header-container">
            <h1>{itemOrItems()}</h1>

            <button className="cart-buttons" id="keep-shopping">
              Keep shopping
              <Link to="/"></Link>
            </button>
          </div>
          <div className="checkout-content-container">
            <ul className="checkout-left">
              {Object.values(cartItems).map((cartItem) => {
                return (
                  <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    quantity={cartItem.quantity}
                  />
                );
              })}
            </ul>
            <CheckoutSummary subtotal={subtotal} />
          </div>
        </div>
      )}
      <p className="checkout-footer">
        <IoLeaf />
        Pixsy offsets carbon emissions from every delivery
      </p>
    </div>
  );
}
