import React from "react";
import { Link } from "react-router-dom";
import ProductSplashItem from "./product_splash_item";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid-left-whitespace"></div>
        <div className="grid-middle-content">
          <h1>Splash Page</h1>
          <h2>Product Index (temporary):</h2>
          <ul className="first-splash-row">
            {this.props.products.map((product) => {
              return <ProductSplashItem key={product.id} product={product} />;
            })}
          </ul>
        </div>
        <div className="grid-right-whitespace"></div>
      </div>
    );
  }
}

export default Splash;
