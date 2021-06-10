import { connect } from "react-redux";
import AddToCart from "./add_to_cart";
import {
  createCartItem,
  updateCartItem,
  fetchAllCartItems,
} from "../../actions/cart_item_actions";

const mapStateToProps = (state) => {
  return {
    cartItems: state.entities.cartItems,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: (userId) => dispatch(fetchAllCartItems(userId)),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
