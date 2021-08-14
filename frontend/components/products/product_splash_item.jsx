import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formattedPrice } from "../../util/product_format_util";

export default function ProductSplashItem(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className="product-splash-item">
      <Link to={`/products/${props.product.id}`}>
        <div className="smooth-image-wrapper">
          <img
            // className="splash-image"
            className={`splash-image smooth-image image-${
              imageLoaded ? "visible" : "hidden"
            }`}
            onLoad={() => setImageLoaded(true)}
            src={props.product.photoUrl[0]}
            name={props.product.name}
          />
          {!imageLoaded && (
            <div className="smooth-preloader">
              <span className="loader" />
            </div>
          )}
        </div>
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
}

/*
        <img
          className="splash-image"
          src={props.product.photoUrl[0]}
          name={props.product.name}
        />
*/
