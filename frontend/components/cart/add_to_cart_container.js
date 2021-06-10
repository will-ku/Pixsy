import { connect } from "react-redux";
import AddToCart from "./add_to_cart";
import {
  createCartItem,
  updateCartItem,
  fetchAllCartItems,
} from "../../actions/cart_item_actions";

const mapStateToProps = (state) => {
  return {
    entities: state.entities,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: (userId) => dispatch(fetchAllCartItems(userId)),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem)),
    updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
