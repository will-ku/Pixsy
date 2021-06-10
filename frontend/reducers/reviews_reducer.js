import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_ALL_REVIEWS,
} from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEW:
      return Object.assign(nextState, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
};

export default reviewsReducer;
