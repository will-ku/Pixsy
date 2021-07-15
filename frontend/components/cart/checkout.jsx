import React, { useEffect, useState } from "react";
import { fetchCartItemProducts } from "../../actions/product_actions";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./checkout_item";
import { Link } from "react-router-dom";
import { IoLeaf } from "react-icons/io5";
import CheckoutSummary from "./checkout_summary";

export default function Checkout() {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.entities.cartItems);
  useEffect(() => {
    dispatch(fetchCartItemProducts(currentUser.id));
  }, []);

  const itemOrItems = () => {
    if (Object.keys(cartItems).length === 1) return "1 item in your cart";
    else {
      return `${Object.keys(cartItems).length} items in your cart`;
    }
  };

  const products = useSelector((state) => state.entities.products);

  // if (Object.keys(cartItems).length === 0) return null;
  if (Object.keys(products).length !== Object.keys(cartItems).length)
    return null;

  // if (loading) return null;
  // if (loading) return null;

  // const subtotal = Object.values(cartItems).reduce((acc, cartItem) => {
  //   let productId = cartItem.productId;
  //   return acc + cartItem.quantity * products[productId].price;
  // }, 0);

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
                let productId = cartItem.productId;
                return (
                  <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    product={products[productId]}
                    quantity={cartItem.quantity}
                  />
                );
              })}
            </ul>
            <CheckoutSummary
              subtotal={Object.values(cartItems).reduce((acc, cartItem) => {
                let productId = cartItem.productId;
                return acc + cartItem.quantity * products[productId].price;
              }, 0)}
            />
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
