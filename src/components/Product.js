import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import { ADD_TO_CART } from "../redux/actionTypes";
import store from "../redux/store";

export default class Product extends Component {
  static contextType = UserContext;
  handleAddToCart = (product) => () => {
    store.dispatch({ type: ADD_TO_CART, payload: product });
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
    const { title, price } = this.props.product;
    return (
      <div className="row border rounded p-2 m-2">
        <div className="col-md-8">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        {!this.props.inCart && this.showInCart()}
      </div>
    );
  }
}
