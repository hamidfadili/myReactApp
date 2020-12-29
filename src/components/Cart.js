import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import Product from "./Product";

export default class Cart extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div>
            <h1>Cart of : </h1>
            {user.cart.map((p) => (
              <Product product={p} inCart />
            ))}
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
