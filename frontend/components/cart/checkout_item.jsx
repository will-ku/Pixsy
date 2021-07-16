import React, { useState } from "react";
import { formattedPrice } from "../../util/product_format_util";
import {
  updateCartItem,
  deleteCartItem,
} from "../../actions/cart_item_actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CheckoutItem(props) {
  const { cartItem, quantity } = props;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let newQuantity = { quantity: parseInt(e.target.value) };
    let updatedCartItem = Object.assign(cartItem, newQuantity);
    dispatch(updateCartItem(updatedCartItem));
  };

  const priceBasedOnQuantity = () =>
    cartItem.productPrice * parseInt(cartItem.quantity);

  const pricePerUnit = () => {
    if (cartItem.quantity < 2) return null;
    else {
      return `(${formattedPrice(cartItem.productPrice)} each)`;
    }
  };

  const deleteClickHandler = () => {
    dispatch(deleteCartItem(cartItem.id));
  };
  return (
    <li className="checkout-li">
      {/* {cartItem.sellerName} */}
      <Link to={`/products/${cartItem.productId}`}>
        <img
          id="checkout-image"
          className="splash-image"
          src={cartItem.photoUrl[0]}
        />
      </Link>
      <div className="checkout-li-mid-col">
        <Link to={`/products/${cartItem.productId}`}>
          {cartItem.productName}
        </Link>
        <button onClick={deleteClickHandler} className="cart-buttons">
          Remove
        </button>
      </div>
      <select
        className="addtocart-drop"
        id="checkout-drop"
        onChange={handleChange}
        value={quantity}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <div className="checkout-price">
        <p style={{ width: "90px", fontWeight: "600", textAlign: "right" }}>
          {formattedPrice(priceBasedOnQuantity())}
        </p>
        <p
          style={{
            width: "90px",
            fontWeight: "300",
            fontSize: "12px",
            marginTop: "2px",
            fontStyle: "italic",
            textAlign: "right",
          }}
        >
          {pricePerUnit()}
        </p>
      </div>
    </li>
  );
}
