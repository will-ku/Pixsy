import React from "react";
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
    const { product } = this.props;

    if (this.state.loading) return null;
    if (this.props.product === undefined) return null;

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
          <h3>Price: {formattedPrice}</h3>
          <br />
          <p>Description:</p>
          <br />
          <p>{product.description}</p>
        </section>
        <section className="product-show-reviews">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            autem earum impedit quae id quos facere nobis quasi ipsum labore
            asperiores quas dolorem voluptatem dolor pariatur eius ea magnam
            fuga saepe, amet porro explicabo. Cum iste exercitationem, saepe,
            tenetur aliquid nesciunt ipsam praesentium impedit sit laborum nulla
            sapiente tempora eveniet.
          </p>
        </section>
      </div>
    );
  }
}

export default ProductShow;
