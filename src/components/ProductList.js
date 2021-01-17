import React from "react";
import Product from "./Product";
import store from "../redux/store";
import { Map } from "react-lodash";
import ReduxComponent from "../reusable/ReduxComponent";

export default class ProductList extends ReduxComponent {
  state = { products: {} };

  refresh = () => {
    const { products } = store.getState();
    this.setState({ products });
  };

  render() {
    return (
      <>
        <h1>{ProductList.name}</h1>
        <Map
          collection={Object.keys(this.state.products)}
          iteratee={(pId) => <Product key={pId} productId={pId} />}
        />
      </>
    );
  }
}
