import { connect } from "react-redux";
import CartIcon from "./cart_icon";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    cartItems: state.entities.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // openModal: () => openModal(),
    // check login form container and user session
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
