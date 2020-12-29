import React, { Component } from "react";
import UserContext from "../contexts/UserContext";

export default class Product extends Component {
  static contextType = UserContext;
  handleAddToCart = (product) => () => {
    const user = {
      ...this.context.user,
      cart: [...this.context.user.cart, product],
    };
    this.context.onChange(user);
  };

  showInCart() {
    return (
      <div className="col-md-4">
        <button
          onClick={this.handleAddToCart(this.props.product)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    );
  }

  render() {
    const product = this.props.product;
    return (
      <div className="row border rounded p-2 m-2">
        <div className="col-md-8">
          <h3>{product.title}</h3>
          <span>{product.price}</span>
        </div>
        {!this.props.inCart && this.showInCart()}
      </div>
    );
  }
}
