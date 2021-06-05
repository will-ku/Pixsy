import React from "react";
import { Link } from "react-router-dom";
import ProductShow from "./product_show";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Splash Page</h1>
        <h2>Product Index (temporary):</h2>
        <ul>
          {this.props.products.map((product, idx) => (
            <li key={idx}>
              <Link to={`products/${product.id}`}> --> {product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Splash;
