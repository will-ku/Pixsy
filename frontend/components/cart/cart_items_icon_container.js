import { connect } from "react-redux";
import CartIcon from "./cart_icon";

const mapStateToProps = (state) => {
  return {
    cartItems: state.entities.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
