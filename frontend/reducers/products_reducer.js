import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from "../actions/product_actions";

const initialProducts = {
  2: {
    id: 2,
    name: "Sony Alpha a7iii Mirrorless Digital Camera",
    description:
      "Distinguished by its updated sensor design, the Alpha a7 III Mirrorless Digital Camera from Sony is a well-rounded camera suitable for both photo and video applications in a variety of working situations. Refined for improved speed and low-light performance, the full-frame 24.2MP Exmor R BSI CMOS sensor and BIONZ X image processor pair to realize an impressive 10 fps continuous shooting rate and improved autofocus performance for faster, more reliable subject tracking along with wide frame coverage.",
    price: 1998,
    sellerId: 10,
  },
  3: {
    id: 3,
    name: "Peak Design Slide",
    description:
      "The most versatile pro camera strap in the world, the newly upgraded Slide can be worn as a sling, neck, or shoulder strap. Internally-padded nylon webbing has a smooth side that glides over clothing in sling mode and a grippy side that prevents slipping in shoulder mode. Dual quick-adjusters provide instant access and easy reconfiguration. Unique Anchor Link system connects quickly and dual points of connection keep your camera more stable than traditional sling straps.",
    price: 65,
    sellerId: 11,
  },
};

const productsReducer = (state = initialProducts, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      Object.assign({}, state, action.posts);
    case RECEIVE_PRODUCT:
      const newState = { [action.product.id]: action.product };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default productsReducer;
