import React, { Component } from "react";

export default class Product extends Component {
  showInCart() {
    return (
      <div className="col-md-4">
        <button
          onClick={this.props.onAddToCart(this.props.product)}
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
      <div className="row border p-2 m-2">
        <div className="col-md-8">
          <h3>{product.title}</h3>
          <span>{product.price}</span>
        </div>
        {!this.props.inCart && this.showInCart()}
      </div>
    );
  }
}
