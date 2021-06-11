import React from "react";
import { connect } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
    // this.cartCount = this.cartCount.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllCartItems(this.props.currentUser);
  // }

  // cartCount() {
  //   if (this.props.currentUser === null) return null;
  //   if (Object.keys(this.props.cartItems).length === 0) return null;
  // }

  

  render() {
    // console.log(this.cartCount());
    return (
      <div className="cart-icon">
        <TiShoppingCart size={27} />
        {/* {this.cartCount} */}
      </div>
    );
  }
}

export default CartIcon;
