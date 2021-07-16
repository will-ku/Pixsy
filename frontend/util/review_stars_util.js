import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

export const numberOfStars = (rating) => {
  switch (rating) {
    case 1:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </div>
      );
    case 2:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </div>
      );
    case 3:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </div>
      );
    case 4:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </div>
      );
    case 5:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      );
    default:
      return (
        <div className="review-star-rating">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
      );
  }
};
