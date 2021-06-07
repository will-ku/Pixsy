import React from "react";
import { connect } from "react-redux";
import Splash from "./splash";
import { fetchAllProducts } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  products: Object.values(state.entities.products),
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
