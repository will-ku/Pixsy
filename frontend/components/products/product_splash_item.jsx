import React from "react";
import { Link } from "react-router-dom";

const ProductSplashItem = (props) => {
  return (
    <li>
      <Link to={`products/${props.product.id}`} className="product-splash-item">
        <img className="splash-image" src={props.product.photoUrl[0]} />
        <figcaption className="splash-cap">{props.product.name}</figcaption>
      </Link>
    </li>
  );
};

export default ProductSplashItem;
