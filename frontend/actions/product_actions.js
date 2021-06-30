import * as APIUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_ARRAY_PRODUCTS = "RECEIVE_ARRAY_PRODUCTS";

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const fetchAllProducts = () => (dispatch) => {
  return APIUtil.fetchAllProducts().then((products) =>
    dispatch(receiveAllProducts(products))
  );
};

export const fetchProduct = (productId) => (dispatch) => {
  return APIUtil.fetchProduct(productId).then((product) => {
    return dispatch(receiveProduct(product));
  });
};

export const fetchCartItemProducts = (userId) => (dispatch) => {
  return APIUtil.fetchCartItemProducts(userId).then((products) =>
    dispatch(receiveAllProducts(products))
  );
};
