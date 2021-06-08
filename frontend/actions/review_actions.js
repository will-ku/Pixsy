import * as APIUtil from "../util/reviews_api_util";

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";

const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews,
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review,
});

export const fetchAllReviews = () => (dispatch) => {
  return APIUtil.fetchAllReviews().then((reviews) =>
    dispatch(receiveAllReviews(reviews))
  );
};

export const fetchReview = (reviewId) => (dispatch) => {
  return APIUtil.fetchReview(reviewId).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const createReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const updateReview = (review) => (dispatch) => {
  return APIUtil.createReview(review).then((review) =>
    dispatch(receiveReview(review))
  );
};

export const deleteReview = (reviewId) => (dispatch) => {
  return APIUtil.deleteReview(reviewId).then((review) =>
    dispatch(receiveReview(review.id))
  );
};
