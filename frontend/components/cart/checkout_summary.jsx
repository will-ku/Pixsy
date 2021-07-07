import React from "react";
import { formattedPrice } from "../../util/product_format_util";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllCartItems } from "../../actions/cart_item_actions";

export default function CheckoutSummary(props) {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const handlePlaceOrder = () => {
    dispatch(deleteAllCartItems(currentUser.id));
  };

  return (
    <div className="checkout-summary-container">
      <h2>How you'll pay</h2>
      <ul>
        <form onSubmit="handlePlaceOrder"></form>
        <li>
          <input
            type="radio"
            name="Payment Type"
            id="Credit Card"
            checked="checked"
          />
          Credit Card
        </li>
        <li>
          <input type="radio" name="Payment Type" id="Paypal" />
          Paypal
        </li>
        <li>
          <input type="radio" name="Payment Type" id="LinkedIn" />
          LinkedIn
        </li>
      </ul>
      <div className="subtotal">
        <p>Item(s) total</p>
        <p>{formattedPrice(props.subtotal)}</p>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
}
