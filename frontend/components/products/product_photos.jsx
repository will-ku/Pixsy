import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

class ProductPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPhotoIdx: 0,
    };
    this.changePhoto = this.changePhoto.bind(this);
    this.clickPhoto = this.clickPhoto.bind(this);
  }

  changePhoto(change) {
    const { product } = this.props;
    const newPhotoIdx =
      (change + this.state.currPhotoIdx + product.photoUrl.length) %
      product.photoUrl.length;
    this.setState({ currPhotoIdx: newPhotoIdx });
  }

  clickPhoto(idx) {
    this.setState({ currPhotoIdx: idx });
  }

  render() {
    const { product } = this.props;
    return (
      <>
        <div className="product-show-carousel">
          <ul>
            {product.photoUrl.map((photo, idx) => {
              return (
                <li key={idx}>
                  <img
                    className="product-show-carousel-photo"
                    src={product.photoUrl[idx]}
                    onClick={() => this.clickPhoto(idx)}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="product-show-main-photo-container">
          <button
            className="main-photo-arrow"
            onClick={() => this.changePhoto(-1)}
          >
            <MdKeyboardArrowLeft />
          </button>
          <img
            className="product-show-main-photo"
            src={product.photoUrl[this.state.currPhotoIdx]}
          />
          <button
            className="main-photo-arrow"
            onClick={() => this.changePhoto(1)}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </>
    );
  }
}

export default ProductPhotos;
