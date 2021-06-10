import React from "react";
import { connect } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TiShoppingCart size={27} />
        {/* <Link>
          <TiShoppingCart size={27} />
        </Link> */}
      </div>
    );
  }
}

export default CartIcon;
