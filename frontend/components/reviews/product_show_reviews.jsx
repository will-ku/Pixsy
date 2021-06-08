import React from "react";
import ProductShow from "../products/product_show";
import ProductShowReviewItem from "./product_show_review_item";

class ProductShowReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.reviews === undefined) return null;

    return (
      <div className="product-show-reviews-flex">
        <h1> Show number of seller reviews || Stars: * * * * * </h1>
        <h2>
          Buyers are raving! Multiple people gave 5-star reviews to this shop in
          the past 7 days.
        </h2>
        <h3>Number of reviews for this item</h3>
        <ul>
          {this.props.reviews.map((review) => {
            return <ProductShowReviewItem review={review} key={review.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default ProductShowReviews;
