import {
  RECEIVE_ALL_CART_ITEMS,
  RECEIVE_CART_ITEM,
  REMOVE_CART_ITEM,
} from "../actions/cart_item_actions";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const cartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.currentUser.cartItems);
    case RECEIVE_ALL_CART_ITEMS:
      return Object.assign({}, action.cartItems);
    case RECEIVE_CART_ITEM:
      return Object.assign({}, state, {
        [action.cartItem.productId]: action.cartItem,
      });
    case REMOVE_CART_ITEM:
      delete nextState[action.productId];
      return nextState;
    default:
      return state;
  }
};

export default cartItemsReducer;
