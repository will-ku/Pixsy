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

  const doNothing = () => {
    return null;
  };

  return (
    <div className="checkout-summary-container">
      <h2>How you'll pay</h2>
      <ul className="payment-options">
        <li>
          <input
            type="radio"
            name="Payment Type"
            id="Credit Card"
            checked="checked"
            onChange={doNothing}
          />
          Credit Card{" "}
          <img
            className="checkout-cc-logos"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-mastercard.jpg"
          />{" "}
          <img
            className="checkout-cc-logos"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-visa.jpg"
          />{" "}
          <img
            className="checkout-cc-logos"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-amex.png"
          />{" "}
          <img
            className="checkout-cc-logos"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-discover.jpg"
          />
        </li>
        <li>
          <input
            type="radio"
            name="Payment Type"
            id="Paypal"
            onChange={doNothing}
          />
          Paypal{" "}
          <img
            className="checkout-cc-logos"
            src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-paypal.png"
          />
        </li>
        <a
          href="https://www.linkedin.com/in/willku/"
          style={{
            textDecoration: "none",
          }}
        >
          <li id="linkedin-checkout">
            <input type="radio" name="Payment Type" onChange={doNothing} />
            LinkedIn{" "}
            <img
              className="checkout-cc-logos"
              src="https://pixsy-dev.s3.us-east-2.amazonaws.com/checkout-icons/checkout-linkedin.jpeg"
            />
          </li>
        </a>
      </ul>
      <div className="monies-container">
        <div className="monies">
          <p className="monies-description">Item(s) total</p>
          <p>{formattedPrice(props.subtotal)}</p>
        </div>
        <div
          className="monies"
          style={{
            borderBottom: "0.3px solid lightgray",
          }}
        >
          <p className="monies-description">Shipping</p>
          <p>{formattedPrice(11.95)}</p>
        </div>
        <div className="monies" style={{ paddingTop: "5px" }}>
          <p className="monies-description" style={{ fontWeight: "400" }}>
            Subtotal
          </p>
          <p>{formattedPrice(props.subtotal + 11.95)}</p>
        </div>
      </div>
      <button onClick={handlePlaceOrder} className="place-order">
        Place Order
      </button>
    </div>
  );
}
