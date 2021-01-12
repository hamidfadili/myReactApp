import React, { Component } from "react";
import Product from "./Product";
import store from "../redux/store";

export default class ProductList extends Component {
  state = { products: {} };
  unsubscribe = null;

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    const { products } = store.getState();
    this.setState({ products });
  };

  render() {
    return (
      <>
        <h1>{ProductList.name}</h1>
        {Object.keys(this.state.products).map((pId) => (
          <Product key={pId} productId={pId} />
        ))}
      </>
    );
  }
}
