import * as APIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW_ERRORS = "REMOVE_REVIEW_ERRORS";

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

const removeReview = (reviewId) => ({
  type: REMOVE_REVIEW,
  reviewId,
});

const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors,
});

const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS,
});

export const fetchAllReviews = (productId) => (dispatch) => {
  return APIUtil.fetchAllReviews(productId).then((reviews) =>
    dispatch(receiveAllReviews(reviews))
  );
};

export const fetchReview = (reviewId) => (dispatch) => {
  return APIUtil.fetchReview(reviewId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const createReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );
};

export const updateReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)),
    (err) => dispatch(receiveReviewErrors(err.responseJSON))
  );
};

export const deleteReview = (reviewId) => (dispatch) => {
  return APIUtil.deleteReview(reviewId).then((review) =>
    dispatch(removeReview(review.id))
  );
};

export const clearReviewErrors = () => (dispatch) => {
  return dispatch(removeReviewErrors());
};
