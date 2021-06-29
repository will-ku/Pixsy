import React from "react";
import { fetchAllCartItems } from "../../util/cart_items_api_util";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      product_id: this.props.product.id,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.pendingQuantity = this.pendingQuantity.bind(this);
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
    this.isProductInCart = this.isProductInCart.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser !== null)
      fetchAllCartItems(this.props.currentUser.id);
  }

  pendingQuantity(e) {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  checkLoggedIn() {
    if (this.props.currentUser === null) {
      return this.props.openModal("login");
    }
  }

  isProductInCart() {
    let productId = this.props.product.id;
    // debugger;
    if (this.props.entities.cartItems[productId] === undefined) {
      return false;
    } else return true;
  }

  submitHandler(e) {
    e.preventDefault();
    this.checkLoggedIn();
    // removing logic because the quanity in form will override existing cart item quantity
    // this.isProductInCart()
    //   ? console.log("already_in_cart")
    //   : this.props.createCartItem(this.state);
    this.props.createCartItem(this.state);
  }

  render() {
    if (this.props.product === undefined) return null;
    return (
      <form className="addtocart" onSubmit={(e) => this.submitHandler(e)}>
        <select className="addtocart-drop" onChange={this.pendingQuantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          id="addtocart-button"
          className="addtocart-button"
          type="submit"
          value="Add to Cart"
        />
      </form>
    );
  }
}

export default AddToCart;
