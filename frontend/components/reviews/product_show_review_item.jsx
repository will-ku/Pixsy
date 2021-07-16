import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { formatDateTime } from "../../util/date_util";
import { numberOfStars } from "../../util/review_stars_util";

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
  console.log(review);

  return (
    <li className="review-li">
      <h3>{formatDateTime(review.updatedAt)}</h3>
      {numberOfStars(review.rating)}
      <h3>{review.comment}</h3>
    </li>
  );
}
