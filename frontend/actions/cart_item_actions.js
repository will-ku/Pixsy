import * as APIUtil from "../util/cart_items_api_util";

export const RECEIVE_ALL_CART_ITEMS = "RECEIVE_ALL_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const RECEIVE_CART_ITEM_ERRORS = "RECEIVE_CART_ITEM_ERRORS";
export const REMOVE_CART_ITEM_ERRORS = "REMOVE_CART_ITEM_ERRORS";

const receiveAllCartItems = (cartItems) => ({
  type: RECEIVE_ALL_CART_ITEMS,
  cartItems,
});

const receiveCartItem = (cartItem) => ({
  type: RECEIVE_CART_ITEM,
  cartItem,
});

const removeCartItem = (cartItemId) => ({
  type: REMOVE_CART_ITEM,
  cartItemId,
});

const receiveCartItemErrors = (errors) => ({
  type: RECEIVE_CART_ITEM_ERRORS,
  errors,
});

const removeCartItemErrors = () => ({
  type: REMOVE_CART_ITEM_ERRORS,
});

export const fetchAllCartItems = (userId) => (dispatch) => {
  return APIUtil.fetchAllCartItems(userId).then((cartItems) =>
    dispatch(receiveAllCartItems(cartItems))
  );
};

export const createCartItem = (cartItem) => (dispatch) => {
  return APIUtil.createCartItem(cartItem).then(
    (cartItem) => dispatch(receiveCartItem(cartItem)),
    (err) => dispatch(receiveCartItemErrors(err))
  );
};

export const updateCartItem = (cartItem) => (dispatch) => {
  return APIUtil.updateCartItem(cartItem).then(
    (cartItem) => dispatch(receiveCartItem(cartItem)),
    (err) => dispatch(receiveCartItemErrors(err))
  );
};

export const deleteCartItem = (cartItemId) => (dispatch) => {
  return APIUtil.deleteCartItem(cartItemId).then((cartItem) =>
    dispatch(removeCartItem(cartItem.id))
  );
};

export const clearCartItemErrors = () => (dispatch) => {
  return dispatch(removeCartItemErrors());
};
