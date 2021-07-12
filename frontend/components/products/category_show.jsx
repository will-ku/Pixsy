import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsInCat } from "../../actions/product_actions";
import ProductSplashItem from "./product_splash_item";

export default function CategoryShow(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsInCat(props.match.params.categoryId));
  }, []);

  const products = useSelector((state) => state.entities.products);

  if (Object.keys(products).length === 0) return null;
  if (!Object.values(products)[0].categoryId) return null;

  return (
    <div>
      <section className="splash-row-container">
        <div className="splash-row-section">
          <h1>Category goes here</h1>
          <ul className="splash-row-content">
            {Object.values(products).map((product) => {
              return <ProductSplashItem key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
