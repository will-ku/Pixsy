import React from "react";
import { Link } from "react-router-dom";
import ProductSplashItem from "./product_splash_item";
import LoadingIcon from "../loading";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    // if the last item in your array doesn't exist, then return Loading (this.props.products[-1])
    return (
      <div className="grid-container">
        <div className="banner-container">
          <img id="barc" src={window.barcelonaURL} alt="Banner" />
          <div id="barc-text">Buy dad something nice this year.</div>
          <div id="shop-fathers">Shop Father's Day</div>
        </div>
        <div className="grid-left-whitespace"></div>
        <div className="grid-splash-content">
          <section className="splash-row-container">
            <div className="splash-row-section">
              <h1>Our top picks for you</h1>
              <ul className="splash-row-content">
                {this.props.products.slice(0, 6).map((product) => {
                  return (
                    <ProductSplashItem key={product.id} product={product} />
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="splash-row-container">
            <div className="splash-row-section">
              <h1>Top picks for travel</h1>
              <ul className="splash-row-content">
                {this.props.products.slice(6, 12).map((product) => {
                  return (
                    <ProductSplashItem key={product.id} product={product} />
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
        <div className="grid-right-whitespace"></div>
      </div>
    );
  }
}

export default Splash;
