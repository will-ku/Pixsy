import React, { useState } from "react";
import { formattedPrice } from "../../util/product_format_util";
import {
  updateCartItem,
  deleteCartItem,
} from "../../actions/cart_item_actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CheckoutItem(props) {
  const { product, cartItem, quantity } = props;
  const dispatch = useDispatch();
  // const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleChange = (e) => {
    // setLocalQuantity(parseInt(e.target.value));
    let newQuantity = { quantity: parseInt(e.target.value) };
    let updatedCartItem = Object.assign(cartItem, newQuantity);
    dispatch(updateCartItem(updatedCartItem));
  };

  const deleteClickHandler = () => {
    dispatch(deleteCartItem(cartItem.id));
  };
  return (
    <li className="checkout-li">
      {product.sellerName}
      <Link to={`/products/${product.id}`}>
        <img
          id="checkout-image"
          className="splash-image"
          src={product.photoUrl[0]}
        />
      </Link>
      <div className="checkout-li-mid-col">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
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
      <p style={{ width: "90px", fontWeight: "600" }}>
        {formattedPrice(product.price)}
      </p>
    </li>
  );
}
