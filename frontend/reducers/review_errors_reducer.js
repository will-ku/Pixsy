import {
  RECEIVE_REVIEW_ERRORS,
  REMOVE_REVIEW_ERRORS,
  RECEIVE_REVIEW,
} from "../actions/review_actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case REMOVE_REVIEW_ERRORS:
      return [];
    case RECEIVE_REVIEW:
      return [];
    default:
      return state;
  }
};
