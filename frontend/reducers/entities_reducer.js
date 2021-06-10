import { combineReducers } from "redux";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";
import cartItemsReducer from "./cart_items_reducer";

export default combineReducers({
  users: usersReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  cartItems: cartItemsReducer,
});
