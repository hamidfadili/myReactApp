import React, { Component } from "react";
import Product from "./Product";
import store from "../redux/store";

export default class Cart extends Component {
  state = { products: [] };
  unsubscribe = null;

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    const { cart } = store.getState();
    this.setState({ products: cart });
  };

  render() {
    const user = { lastName: "Fadili", cart: [] };
    let i = 1;
    return (
      <div>
        <h1>Cart of : {user.lastName}</h1>
        {this.state.products.map((p) => (
          <Product key={p.id + "-" + i++} product={p} inCart />
        ))}
      </div>
    );
  }
}
