import React, { Component } from "react";
import Product from "./Product";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart of : </h1>
        {this.props.products.map((p) => (
          <Product product={p} inCart />
        ))}
      </div>
    );
  }
}
