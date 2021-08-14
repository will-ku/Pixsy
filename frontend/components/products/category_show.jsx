import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsInCat } from "../../actions/product_actions";
import ProductSplashItem from "./product_splash_item";

export default function CategoryShow(props) {
  const products = useSelector((state) => state.entities.products);
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setRendered(false);
    dispatch(fetchAllProductsInCat(props.match.params.categoryId));
    setRendered(true);
  }, [props.match.params]);

  const noProductsInState = Object.keys(products).length === 0;

  if (noProductsInState) return null;

  let categoryName =
    typeof Object.values(products)[0].categoryName === "undefined"
      ? null
      : (categoryName = Object.values(products)[0].categoryName);

  return (
    <div>
      {rendered ? (
        <div className="search-whole-page-container">
          <div className="search-page-header-container">
            <h1>{categoryName}</h1>
          </div>
          <div className="search-page-content-container">
            <div className="search-page-side-bar"></div>
            <div className="search-page-grid-container">
              {Object.values(products).map((product) => {
                return <ProductSplashItem key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
