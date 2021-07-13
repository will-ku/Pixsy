import { combineReducers } from "redux";

import sessionsReducer from "./session_errors_reducer";
import reviewsReducer from "./review_errors_reducer";
import cartItemsReducer from "./cart_item_errors_reducer";
import productsReducer from "./product_errors_reducer";

export default combineReducers({
  session: sessionsReducer,
  reviews: reviewsReducer,
  cartItems: cartItemsReducer,
  products: productsReducer,
});
