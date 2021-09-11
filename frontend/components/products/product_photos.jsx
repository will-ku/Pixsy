import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function ProductPhotos(props) {
  const { product } = props;
  const [currPhotoIdx, setPhotoIdx] = useState(0);

  const changePhoto = (change) => {
    const newPhotoIdx =
      (change + currPhotoIdx + product.photoUrl.length) %
      product.photoUrl.length;
    setPhotoIdx(newPhotoIdx);
  };

  const clickPhoto = (idx) => {
    setPhotoIdx(idx);
  };

  
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
                  onClick={() => clickPhoto(idx)}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="product-show-main-photo-container">
        <button className="main-photo-arrow" onClick={() => changePhoto(-1)}>
          <MdKeyboardArrowLeft />
        </button>
        <img
          className="product-show-main-photo"
          src={product.photoUrl[currPhotoIdx]}
        />
        <button className="main-photo-arrow" onClick={() => changePhoto(1)}>
          <MdKeyboardArrowRight />
        </button>
      </div>
    </>
  );
}
