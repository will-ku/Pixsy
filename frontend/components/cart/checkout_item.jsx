import React from "react";

export default function CheckoutItem(props) {
  const { product, quantity } = props;
  return (
    <li className="checkout-li">
      {product.sellerName}
      <img className="splash-image" src={product.photoUrl[0]} />
      {product.name}
      quantity: {quantity}
    </li>
  );
}
