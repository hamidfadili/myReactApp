import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <h1>{ProductList.name}</h1>
        {this.props.products.map((p) => (
          <Product product={p} onAddToCart={this.props.onAddToCart} />
        ))}
      </>
    );
  }
}
