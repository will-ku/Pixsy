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

  const products = useSelector((state) => state.entities.products);

  if (Object.keys(products).length < Object.keys(cartItems).length) return null;

  const subtotal = Object.values(cartItems).reduce((acc, cartItem) => {
    let productId = cartItem.productId;
    return acc + cartItem.quantity * products[productId].price;
  }, 0);

  return (
    <div className="checkout-page">
      <div className="checkout-content-container">
        <div className="checkout-left">
          {Object.keys(cartItems).length === 0 ? (
            <div className="empty-cart-container">
              <h1>Your cart is empty.</h1>
              <Link to="/">Discover something unique to fill it up</Link>
            </div>
          ) : (
            <ul className="checkout-ul">
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
          )}
        </div>
        <CheckoutSummary subtotal={subtotal} className="checkout-right" />
      </div>
      <p className="checkout-footer">
        <IoLeaf />
        Pixsy offsets carbon emissions from every delivery
      </p>
    </div>
  );
}
