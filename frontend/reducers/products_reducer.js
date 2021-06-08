import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return Object.assign(nextState, action.products);
    case RECEIVE_PRODUCT:
      // const newProduct = { [action.product.id]: action.product };
      return Object.assign({}, state, action.product);
    default:
      return state;
  }
};

export default productsReducer;
