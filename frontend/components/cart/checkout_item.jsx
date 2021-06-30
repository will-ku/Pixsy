import React from "react";
import { formattedPrice } from "../../util/product_format_util";

export default function CheckoutItem(props) {
  const { product, quantity } = props;
  return (
    <li className="checkout-li">
      {product.sellerName}
      <img className="splash-image" src={product.photoUrl[0]} />
      {product.name}
      quantity: {quantity}
      {formattedPrice(product.price)}
    </li>
  );
}
