import { connect } from "react-redux";
import ProductShowReviews from "./product_show_reviews";
import { updateReview, deleteReview } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    reviews: state.entities.reviews,
  };
};

const mapDispatchToprops = (dispatch) => ({
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToprops)(ProductShowReviews);
