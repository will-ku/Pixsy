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
    this.backToSchoolRender = this.backToSchoolRender.bind(this);
  }

  componentDidMount() {
    this.props
      .fetchAllProducts()
      .done(() => this.setState({ doneRendering: true }));
  }

  backToSchoolRender(num) {
    if (this.props.products.length < num) {
      return null;
    }
    return (
      <Link to={`/products/${num + 1}`}>
        <img
          src={this.props.products[num].photoUrl[0]}
          name={this.props.products[num].name}
          className="splash-bts-item-img"
        />
      </Link>
    );
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
          <section className="splash-bts-grid-container">
            <img src={window.btsgridtop} id="bts-grid-top-border" />
            <div id="splash-bts-flex-container">
              <div className="splash-bts-grid">
                <div className="splash-bts-item" id="splash-bts-header">
                  <span>Editor's Picks</span>
                  <h1>Back-to-school</h1>
                  <p>Shop these unique finds</p>
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(18)}
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(25)}
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(19)}
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(22)}
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(23)}
                </div>
                <div className="splash-bts-item">
                  {this.backToSchoolRender(24)}
                </div>
                <div className="splash-bts-item" id="splash-bts-footer">
                  <p>
                    Score an A+ in expression with school supplies that show off
                    what makes any student so totally one-of-a-kind.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="splash-row-container">
            <div className="splash-row-section">
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "30px",
                  paddingBottom: "25px",
                  borderBottom: "0.5px solid lightgray",
                  marginBottom: "15px",
                }}
              >
                Best for weddings
              </h3>
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
