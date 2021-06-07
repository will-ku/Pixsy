import React from "react";

class ProductPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 0,
    };
  }

  render() {
    return (
      <div className="product-show-photos">
        {" "}
        product photos placeholder
        <br />
        with carousel and big image
      </div>
    );
  }
}

export default ProductPhotos;
