import React from "react";

function ProductShowReviewItems(props) {
  return (
    <li>
      {/* <h1>{props.review.firstName}</h1> */}
      <h1>{props.review.rating}</h1>
      <h1>{props.review.comment}</h1>
      <h1>{props.review.updatedAt}</h1>
    </li>
  );
}

export default ProductShowReviewItems;
