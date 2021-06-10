import {
  RECEIVE_CART_ITEM,
  RECEIVE_CART_ITEM_ERRORS,
  REMOVE_CART_ITEM_ERRORS,
} from "../actions/cart_item_actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CART_ITEM:
      return action.errors;
    case RECEIVE_CART_ITEM_ERRORS:
      return [];
    case REMOVE_CART_ITEM_ERRORS:
      return [];
    default:
      return state;
  }
};
