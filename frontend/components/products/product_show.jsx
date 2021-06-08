import React from "react";
import ProductShowReviews from "../reviews/product_show_reviews";
import ProductPhotos from "./product_photos";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    if (!this.props.product) {
      this.props
        .fetchProduct(this.props.match.params.productId)
        .then(() => this.setState({ loading: false }));
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading === true) return null;
    if (this.props.product === undefined) return null;

    const { product } = this.props;

    const formattedPrice =
      "$" +
      product.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return (
      <div className="product-show-grid-container">
        <section className="product-show-photos">
          <ProductPhotos
            product={this.props.product}
            fetchProduct={this.props.fetchProduct}
          />
        </section>
        <section className="product-show-details">
          <h1>{product.name}</h1>
          <h3>TESTTEXT: Price: {formattedPrice}</h3>
          <br />
          <p>TESTTEXT: Description:</p>
          <br />
          <p>{product.description}</p>
        </section>
        <section className="product-show-reviews">
          <ProductShowReviews product={this.props.product} />
        </section>
      </div>
    );
  }
}

export default ProductShow;
