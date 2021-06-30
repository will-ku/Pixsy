import React from "react";
import ProductShow from "../products/product_show";
import ProductShowReviewItem from "./product_show_review_item";
import CreateReviewFormContainer from "./create_review_form_container";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";

class ProductShowReviews extends React.Component {
  constructor(props) {
    super(props);
    this.createReviewsForm = this.createReviewsForm.bind(this);
  }

  createReviewsForm() {
    return this.props.currentUser ? (
      <CreateReviewFormContainer productId={this.props.product.id} />
    ) : (
      <a
        className="reviews-login-link"
        onClick={() => this.props.openModal("login")}
      >
        <i>Please sign in to submit a review.</i>
      </a>
    );
  }

  render() {
    const reviewsArr = Object.values(this.props.reviews);
    return (
      <div className="product-show-reviews-flex">
        <h1>
          {reviewsArr.length} reviews &nbsp;
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </h1>
        <h3>
          <RiUserStarLine /> &nbsp;
          <b>Buyers are raving! </b> Multiple people gave 5-star reviews to this
          shop in the past 7 days
        </h3>

        <ul className="actual-reviews">
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
