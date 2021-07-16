import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsInCat } from "../../actions/product_actions";
import ProductSplashItem from "./product_splash_item";

export default function CategoryShow(props) {
  const products = useSelector((state) => state.entities.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsInCat(props.match.params.categoryId));
  }, [props.match.params]);
  const noProductsInState = Object.keys(products).length === 0;

  // if (noProductsInState) return <div>No search results found</div>;
  if (noProductsInState) return null;

  let categoryName;
  typeof Object.values(products)[0].categoryName === "undefined"
    ? null
    : (categoryName = Object.values(products)[0].categoryName);

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="search-page-container">
        <div className="search-page-grid-container">
          {Object.values(products).map((product) => {
            return <ProductSplashItem key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
}
