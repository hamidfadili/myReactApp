import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import store from "../redux/store";

class NavBar extends Component {
  state = {};

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    const { user, cart } = store.getState();
    this.setState({
      username: user.firstName,
      cartSize: cart.length,
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
