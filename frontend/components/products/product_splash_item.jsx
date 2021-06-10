import React from "react";
import { Link } from "react-router-dom";

const ProductSplashItem = (props) => {
  let formattedPrice =
    "$" +
    props.product.price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  return (
    <li>
      <Link to={`products/${props.product.id}`} className="product-splash-item">
        <img className="splash-image" src={props.product.photoUrl[0]} />
        <div className="splash-item-details">
          <figcaption className="splash-item-name">
            {props.product.name}
          </figcaption>
          <figcaption className="splash-item-price">
            {formattedPrice}
          </figcaption>
        </div>
      </Link>
    </li>
  );
};

export default ProductSplashItem;
