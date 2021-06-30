import React from "react";
import { formattedPrice } from "../../util/product_format_util";
import { useSelector } from "react-redux";

export default function CheckoutSummary(props) {
  const currentUser = useSelector((state) => state.session.currentUser);
  const cartItems = useSelector((state) => state.entities.cartItems);

  return (
    <div className="checkout-summary-container">
      <h2>How you'll pay</h2>
      <ul>
        <li>
          <input type="radio" name="Payment Type" id="Credit Card" />
          Credit Card
        </li>
        <li><input type="radio" name="Payment Type" id="Paypal" />
        Paypal</li>
        <li><input type="radio" name="Payment Type" id="LinkedIn" />
        LinkedIn</li>
      </ul>
      <div className="subtotal">
        <p>Item(s) total</p>
        <p>{formattedPrice(props.subtotal)}</p>
      </div>
      <button>Place Order</button>
    </div>
  );
}
