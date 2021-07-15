import * as APIUtil from "../util/products_api_util";

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_SEARCHED_PRODUCTS = "RECEIVE_SEARCHED_PRODUCTS";
export const RECEIVE_CART_PRODUCTS = "RECEIVE_SEARCHED_PRODUCTS";
export const CLEAR_ALL_PRODUCTS = "CLEAR_ALL_PRODUCTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERRORS";

export const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products,
});

export const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const receiveSearchedProducts = (products) => ({
  type: RECEIVE_SEARCHED_PRODUCTS,
  products,
});

export const receiveCartProducts = (products) => ({
  type: RECEIVE_CART_PRODUCTS,
  products,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors,
});

export const clearAllProducts = () => ({
  type: CLEAR_ALL_PRODUCTS,
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
    dispatch(receiveCartProducts(products))
  );
};

export const fetchAllProductsInCat = (catId) => (dispatch) => {
  return APIUtil.fetchAllProductsInCat(catId).then((products) =>
    dispatch(receiveSearchedProducts(products))
  );
};

export const fetchSearchedProducts = (query) => (dispatch) => {
  return APIUtil.searchProducts(query).then(
    (products) => dispatch(receiveSearchedProducts(products)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};
