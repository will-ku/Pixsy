import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    console.log(this.props);
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
    return (
      <div className="grid-container">
        <div className="grid-left-whitespace"></div>

        <div className="grid-middle-content">
          <div className="product-show-content-left"></div>
          <div className="product-show-content-right">
            <h1>Test</h1>
            {/* <img src={this.props.product.photoUrl[0]} alt="" /> */}
            <h1>{product.name}</h1>
            <h3>Price: {product.price}</h3>
            <br />
            <p>Description:</p>
            <br />
            <p>{product.description}</p>
          </div>
        </div>
        <div className="grid-right-whitespace"></div>
      </div>
    );
  }
}

export default ProductShow;
