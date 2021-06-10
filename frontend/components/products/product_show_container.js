import { connect } from "react-redux";
import ProductShow from "./product_show";
import { fetchProduct } from "../../actions/product_actions";
import { fetchAllReviews } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
  fetchAllReviews: (productId) => dispatch(fetchAllReviews(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);
