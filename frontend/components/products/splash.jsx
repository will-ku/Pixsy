import React from "react";
import { Link } from "react-router-dom";
import ProductSplashItem from "./product_splash_item";
import SplashFooter from "../misc/splash_footer";
import WhatIsPixsy from "../misc/what_is_pixsy";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneRendering: false,
    };
  }

  componentDidMount() {
    this.props
      .fetchAllProducts()
      .done(() => this.setState({ doneRendering: true }));
  }

  render() {
    // if the last item in your array doesn't exist, then return Loading (this.props.products[-1])
    const arrowRight = "->";

    return (
      <div className="grid-container">
        <div className="banner-container">
          <h1>Because everyone deserves something as unique as they are.</h1>
          <h3>Shop special finds</h3>
          <div className="banner-links-container">
            <div className="banner-links">
              <Link to={`/category/1`} className="banner-cat-li">
                <img src="https://pixsy-dev.s3.us-east-2.amazonaws.com/splash-pics/splash-cam.png" />
                <p>Digital Cameras {arrowRight}</p>
              </Link>

              <Link to={`/category/7`} className="banner-cat-li">
                <img src="https://pixsy-dev.s3.us-east-2.amazonaws.com/splash-pics/splash-accessories.jpeg" />
                <p>Accessories {arrowRight}</p>
              </Link>

              <Link to={`/category/4`} className="banner-cat-li">
                <img src="https://pixsy-dev.s3.us-east-2.amazonaws.com/splash-pics/splash-drone.jpeg" />
                <p>Drones {arrowRight}</p>
              </Link>

              <Link to={`/category/3`} className="banner-cat-li">
                <img src="https://pixsy-dev.s3.us-east-2.amazonaws.com/splash-pics/splash-bag.png" />
                <p>Bags & Cases {arrowRight}</p>
              </Link>

              <Link to={`/category/2`} className="banner-cat-li">
                <img src="https://pixsy-dev.s3.us-east-2.amazonaws.com/splash-pics/splash-lens.png" />
                <p>Lenses {arrowRight}</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid-left-whitespace"></div>
        <div className="grid-splash-content">
          <section className="splash-row-container">
            <div className="splash-row-section">
              <h3>Our top picks for you</h3>
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
              <h3>Top picks for travel</h3>
              <ul className="splash-row-content">
                {this.props.products.slice(6, 12).map((product) => {
                  return (
                    <ProductSplashItem key={product.id} product={product} />
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="splash-row-container">
            <div className="splash-row-section">
              <h3>Best for weddings</h3>
              <ul className="splash-row-content">
                {this.props.products.slice(12, 18).map((product) => {
                  return (
                    <ProductSplashItem key={product.id} product={product} />
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
        <div className="grid-right-whitespace"></div>
        <WhatIsPixsy />
        <SplashFooter />
      </div>
    );
  }
}

export default Splash;
