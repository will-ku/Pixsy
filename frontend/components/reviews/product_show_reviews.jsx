import React from "react";
import ProductShow from "../products/product_show";
import ProductShowReviewItem from "./product_show_review_item";
import CreateReviewFormContainer from "./create_review_form_container";

class ProductShowReviews extends React.Component {
  constructor(props) {
    super(props);
    this.createReviewsForm = this.createReviewsForm.bind(this);
  }

  createReviewsForm() {
    return this.props.currentUser ? (
      <CreateReviewFormContainer productId={this.props.product.id} />
    ) : (
      <p>Please log in to submit a review.</p>
    );
  }

  render() {
    const reviewsArr = Object.values(this.props.reviews);

    return (
      <div className="product-show-reviews-flex">
        <h1>TESTTEXT: Show number of seller reviews || Stars: * * * * *</h1>
        <h1>TESTTEXT: Number of reviews for this item: {reviewsArr.length}</h1>

        <ul>
          {reviewsArr
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
        {this.createReviewsForm()}
      </div>
    );
  }
}

export default ProductShowReviews;
