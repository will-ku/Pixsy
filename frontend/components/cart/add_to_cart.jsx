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

  submitHandler(e) {
    e.preventDefault();
    debugger;
    this.props.createCartItem(this.state);
    // if (!this.props) {
    // }
  }

  render() {
    if (this.props.product === undefined) return null;
    return (
      <form onSubmit={(e) => this.submitHandler(e)}>
        <select onChange={this.pendingQuantity}>
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
        <input type="submit" value="Add to Cart" />
      </form>
    );
  }
}

export default AddToCart;
