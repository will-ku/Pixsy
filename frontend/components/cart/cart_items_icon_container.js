import { connect } from "react-redux";
import CartIcon from "./cart_icon";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchAllCartItems } from "../../actions/cart_item_actions";

const mapStateToProps = (state) => {
  return {
    cartItems: state.entities.cartItems,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCartItems: (userId) => dispatch(fetchAllCartItems(userId)),
    // openModal: () => openModal(),
    // check login form container and user session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
