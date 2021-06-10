import React from "react";
import ProductShow from "../products/product_show";
import ProductShowReviewItem from "./product_show_review_item";
import CreateReviewFormContainer from "./create_review_form_container";

class ProductShowReviews extends React.Component {
  constructor(props) {
    super(props);
    this.reviewsArr = this.reviewsArr.bind(this);
  }

  reviewsArr() {
    if (this.props.product.productReviews === undefined) return [];
    return Object.values(this.props.product.productReviews);
  }

  render() {
    console.log(Object.values(this.props.reviews).reverse().slice(0, 5));
    // if (this.props.reviews === undefined) return null;
    return (
      <div className="product-show-reviews-flex">
        <h1>TESTTEXT: Show number of seller reviews || Stars: * * * * *</h1>
        <h1>
          TESTTEXT: Number of reviews for this item: {this.reviewsArr().length}
        </h1>

        <ul>
          {Object.values(this.props.reviews)
            .reverse()
            .slice(0, 5)
            .map((review) => {
              return (
                <ProductShowReviewItem
                  review={review}
                  key={review.id}
                  currentUser={this.props.currentUser}
                  updateReview={this.props.updateReview}
                  deleteReview={this.props.deleteReview}
                />
              );
            })}
        </ul>
        <CreateReviewFormContainer productId={this.props.product.id} />
      </div>
    );
  }
}

export default ProductShowReviews;
