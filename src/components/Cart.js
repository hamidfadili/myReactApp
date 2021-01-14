import React from "react";
import Product from "./Product";
import store from "../redux/store";
import ReduxComponent from "../reusable/ReduxComponent";
import { Map as MapComponent } from "react-lodash";

export default class Cart extends ReduxComponent {
  state = { products: new Map(), username: "" };

  refresh = () => {
    const { cart, user } = store.getState();
    this.setState({ products: cart, username: user.firstName });
  };

  render() {
    let i = 1;
    return (
      <div>
        <h1>Cart of : {this.state.username}</h1>
        <MapComponent
          collection={Object.keys(this.state.products)}
          iteratee={(pId) => (
            <Product key={pId + "-" + i++} productId={pId} inCart />
          )}
        />
      </div>
    );
  }
}
