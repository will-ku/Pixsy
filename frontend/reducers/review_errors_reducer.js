import {
  RECEIVE_REVIEW_ERRORS,
  REMOVE_REVIEW_ERRORS,
  RECEIVE_REVIEW,
} from "../actions/review_actions";

import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from "../actions/product_actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case REMOVE_REVIEW_ERRORS:
      return [];
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_ALL_PRODUCTS:
      return [];
    default:
      return state;
  }
};
