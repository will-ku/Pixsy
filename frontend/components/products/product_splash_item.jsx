import React from "react";
import { Link } from "react-router-dom";
import { formattedPrice } from "../../util/product_format_util";

const ProductSplashItem = (props) => {
  return (
    <li className="product-splash-item">
      <Link to={`/products/${props.product.id}`}>
        <img
          className="splash-image"
          src={props.product.photoUrl[0]}
          name={props.product.name}
        />
        <div className="splash-item-details">
          <figcaption className="splash-item-name">
            {props.product.name}
          </figcaption>
          <figcaption className="splash-seller-name">
            {props.product.sellerName}
          </figcaption>
          <figcaption className="splash-item-price">
            {formattedPrice(props.product.price)}
          </figcaption>
        </div>
      </Link>
    </li>
  );
};

export default ProductSplashItem;
