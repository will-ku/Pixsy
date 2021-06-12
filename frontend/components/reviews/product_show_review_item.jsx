import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { formatDateTime } from "../../util/date_util";

export default function ProductShowReviewItem(props) {
  const { currentUser, updateReview, deleteReview, review } = props;

  const filledStars = () => {
    for (let i = 0; i < review.rating; i++) {
      return <BsStarFill />;
    }
  };

  const emptyStars = () => {
    for (let i = 0; i < 4 - review.rating; i++) {
      return <BsStarHalf />;
    }
  };

  return (
    <li>
      <h3>{formatDateTime(review.updatedAt)}</h3>
      {/* {currentUser.id === review.reviewerId ? (
        <button onClick={updateReview(review)}>Update Review</button>
      ) : null} */}
      {/* {currentUser.id === review.reviewerId ? (
        <button onClick={deleteReview(review.id)}>Delete Review</button>
      ) : null} */}
      <div className="review-star-rating">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        {/* <div>{filledStars()}</div> */}
        {/* <div>{emptyStars()}</div> */}
      </div>
      <h3>{review.comment}</h3>
    </li>
  );
}
