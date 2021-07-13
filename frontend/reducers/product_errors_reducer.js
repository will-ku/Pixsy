import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_SEARCHED_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
  RECEIVE_SEARCH_ERRORS,
} from "../actions/product_actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return [];
    case RECEIVE_PRODUCT:
      return [];
    case RECEIVE_SEARCHED_PRODUCTS:
      return [];
    case CLEAR_ALL_PRODUCTS:
      return [];
    case RECEIVE_SEARCH_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
