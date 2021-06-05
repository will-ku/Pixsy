import * as APIUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

export const receiveAllProducts = (benches) => ({
  type: RECEIVE_ALL_PRODUCTS,
  benches,
});

export const receiveProduct = (bench) => ({
  type: RECEIVE_PRODUCT,
  bench,
});

export const fetchAllProducts = () => (dispatch) => {
  return APIUtil.fetchAllProducts().then((reports) =>
    dispatch(receiveAllProducts(products))
  );
};

export const fetchProduct = (productId) => (dispatch) => {
  return APIUtil.fetchProduct(productId).then((product) =>
    dispatch(receiveProduct(product.id))
  );
};
