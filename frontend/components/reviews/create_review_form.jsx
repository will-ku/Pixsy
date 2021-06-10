import React from "react";
import { FaStar } from "react-icons/fa";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.report.rating,
      comment: this.props.report.comment,
      reviewerId: this.props.report.reviewerId,
      productId: this.props.productId,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.props.fetchProduct(this.props.productId).then(
      this.setState({
        rating: "",
        comment: "",
      })
    );
  }

  setRating() {
    return (e) => this.setState({ rating: e.target.value });
  }

  updateComment() {
    return (e) => this.setState({ comment: e.target.value });
  }

  renderErrors() {
    return (
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li className="errors-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h1>Create Review</h1>
        {this.props.errors ? this.renderErrors() : null}
        Rating
        <div>
          {[...Array(5)].map((star, idx) => {
            const ratingValue = idx + 1;
            return (
              <label key={ratingValue}>
                <input
                  className="star-radio"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={this.setRating(ratingValue)}
                />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= this.state.rating ? "#000000" : "#e4e5e9"
                  }
                  size={22}
                />
              </label>
            );
          })}
        </div>
        <label>
          Comment
          <textarea
            value={this.state.comment}
            onChange={this.updateComment()}
          />
        </label>
        <button type="submit">Submit Review</button>
      </form>
    );
  }
}

export default CreateReviewForm;
