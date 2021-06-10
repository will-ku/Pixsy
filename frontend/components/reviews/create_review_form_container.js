import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import CreateReviewForm from "./create_review_form";
import { fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  report: {
    rating: null,
    comment: "",
    reviewerId: state.session.currentUser,
  },
  errors: state.errors.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review)),
  fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);
