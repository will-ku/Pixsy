import React from "react";
import { fetchAllCartItems } from "../../util/cart_items_api_util";

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.pendingQuantity = this.pendingQuantity.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser !== undefined)
      fetchAllCartItems(this.props.currentUser.id);
  }

  pendingQuantity(e) {
    this.setState({ quantity: parseInt(e.target.value) });
  }

  submitHandler() {
    e.preventDefault();
    // if (this.props.cartItems)
  }

  render() {
    if (this.props.product === undefined) return null;
    return (
      <form>
        <select onChange={this.pendingQuantity} onSubmit={this.submitHandler}>
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

        <button onSubmit={this.submitHandler} type="submit">
          Add to Cart
        </button>
      </form>
    );
  }
}

export default AddToCart;
