import React from "react";

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
      <div className="product-show-photos-flex-box">
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
