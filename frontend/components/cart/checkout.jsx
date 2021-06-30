import React, { useEffect, useState } from "react";
import { fetchCartItemProducts } from "../../actions/product_actions";
import { useSelector, useDispatch } from "react-redux";
import CheckoutItem from "./checkout_item";

export default function Checkout() {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.entities.cartItems);
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItemProducts(currentUser.id));
  }, []);

  const products = useSelector((state) => state.entities.products);

  return (
    <div className="checkout-container">
      {/* {loaded === false ? null : ( */}
      {Object.keys(products).length < Object.keys(cartItems).length ? null : (
        <ul className="checkout-ul">
          {Object.values(cartItems).map((cartItem) => {
            let productId = cartItem.productId;
            return (
              <CheckoutItem
                key={cartItem.id}
                product={products[productId]}
                quantity={cartItem.quantity}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
