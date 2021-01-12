import React, { Component } from "react";
import { ADD_TO_CART } from "../redux/actionTypes";
import store from "../redux/store";
import IsTruthy from "../reusable/IsTruthy";
import CartButtons from "./CartButtons";

export default class Product extends Component {
  handleAddToCart = (productId) => () => {
    store.dispatch({ type: ADD_TO_CART, payload: productId });
  };

  showInCart = () => {
    return (
      <div className="col-md-4">
        <button
          onClick={this.handleAddToCart(this.props.productId)}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    );
  };

  render() {
    let state = store.getState();
    const { title, price, id: productId } = state.products[
      this.props.productId
    ];
    return (
      <div className="row border rounded p-2 m-2">
        <div className="col-md-8">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>
        <IsTruthy
          value={this.props.inCart}
          yes={() => <CartButtons productId={productId} />}
          no={this.showInCart}
        />
      </div>
    );
  }
}
