import React from "react";

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <h1>{product.name}</h1>
        <h3>Price: {product.price}</h3>
        <br />
        <p>Description:</p>
        <br />
        <p>{product.description}</p>
      </div>
    );
  }
}

export default ProductShow;
