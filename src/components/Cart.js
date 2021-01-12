import React, { Component } from "react";
import Product from "./Product";
import store from "../redux/store";

export default class Cart extends Component {
  state = { products: new Map(), username: "" };
  unsubscribe = null;

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    const { cart, user } = store.getState();
    this.setState({ products: cart, username: user.firstName });
  };

  render() {
    let i = 1;
    return (
      <div>
        <h1>Cart of : {this.state.username}</h1>
        {Object.keys(this.state.products).map((pId) => (
          <Product key={pId + "-" + i++} productId={pId} inCart />
        ))}
      </div>
    );
  }
}
