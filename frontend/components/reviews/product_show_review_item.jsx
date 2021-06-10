import React from "react";

export default function ProductShowReviewItem(props) {
  const { currentUser, updateReview, deleteReview, review } = props;

  return (
    <li>
      hi
      {/* {currentUser.id === review.reviewerId ? (
        <button onClick={updateReview(review)}>Update Review</button>
      ) : null} */}
      {/* {currentUser.id === review.reviewerId ? (
        <button onClick={deleteReview(review.id)}>Delete Review</button>
      ) : null} */}
      <h1>{review.rating}</h1>
      <h1>{review.comment}</h1>
      <h1>{review.updatedAt}</h1>
    </li>
  );
}
