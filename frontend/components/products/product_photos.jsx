import React from "react";

class ProductPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPhotoIdx: 0,
    };
    this.changePhoto = this.changePhoto.bind(this);
  }

  changePhoto(change) {
    const { product } = this.props;
    const newPhotoIdx =
      (change + this.state.currPhotoIdx + product.photoUrl.length) %
      product.photoUrl.length;
    this.setState({ currPhotoIdx: newPhotoIdx });
  }

  render() {
    const { product } = this.props;
    return (
      <div className="product-show-photos-flex-box">
        <div className="product-show-carousel">
          <ul>
            {product.photoUrl.map((photo, idx) => {
              return (
                <li key={idx}>
                  <img
                    className="product-show-carousel-photo"
                    src={product.photoUrl[idx]}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="product-show-main-photo">
          <button className="next-photo" onClick={() => this.changePhoto(-1)}>
            previous
          </button>
          <img src={product.photoUrl[this.state.currPhotoIdx]} />
          <button className="prev-photo" onClick={() => this.changePhoto(1)}>
            next
          </button>
        </div>
      </div>
    );
  }
}

export default ProductPhotos;

// import { connect } from "react-redux";
// import { fetchProduct } from "../../actions/product_actions";

// const mapStateToProps = (state, ownProps) => ({
//   product: state.entities.products[ownProps.match.params.productId],
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchProduct: (productId) => dispatch(fetchProduct(productId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProductPhotos);
