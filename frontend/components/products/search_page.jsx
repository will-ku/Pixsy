import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSearchedProducts } from "../../actions/product_actions";
import ProductSplashItem from "./product_splash_item";

export default function SearchPage() {
  const products = useSelector((state) => state.entities.products);
  const errors = useSelector((state) => state.errors.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const queryTerm = history.location.search.slice(3);

  const renderErrors = () => {
    return (
      <ul className="errors-ul">
        {errors.map((error, i) => (
          <li className="errors-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(
    () => dispatch(fetchSearchedProducts(queryTerm)),
    [history.location.search]
  );

  if (Object.keys(products).length === 0) return null;

  return (
    <div>
      {errors.length > 0
        ? renderErrors()
        : Object.values(products).map((product, i) => {
            return <ProductSplashItem key={i} product={product} />;
          })}
    </div>
  );
}
