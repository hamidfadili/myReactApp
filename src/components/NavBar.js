import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    const user = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Welcome
          <b>
            <i> {user.firstName}</i>
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
        <span className="badge badge-danger ml-auto">{user.cart.length}</span>
      </nav>
    );
  }
}

export default NavBar;
