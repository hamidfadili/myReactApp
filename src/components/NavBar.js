import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import store from "../redux/store";
import ReduxComponent from "../reusable/ReduxComponent";

class NavBar extends ReduxComponent {
  state = {};

  calculLength = (cart = {}) => {
    let summe = 0;
    Object.values(cart).forEach((p) => {
      summe += p.count;
    });
    return summe;
  };

  refresh = () => {
    const { user, cart } = store.getState();
    this.setState({
      username: user.firstName,
      cartSize: this.calculLength(cart),
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Welcome
          <b>
            <i> {this.state.username}</i>
          </b>
        </span>
        <NavLink exact className="nav-link" to="/">
          Products
        </NavLink>
        <NavLink className="nav-link" to="/cart">
          Cart
        </NavLink>
        <NavLink className="nav-link" to="/user">
          Profile
        </NavLink>
        <span className="badge badge-danger ml-auto">
          {this.state.cartSize}
        </span>
      </nav>
    );
  }
}

export default NavBar;
