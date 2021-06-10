import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  review,
});

const mapDispatchToprops = (dispatch) => ({
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
});

export default connect(mapStateToProps, mapDispatchToprops)(CreateReviewForm);
