import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

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
        <Link class="nav-link" to="/">
          Products
        </Link>
        <Link class="nav-link" to="/cart">
          Cart
        </Link>
        <Link class="nav-link" to="/profile">
          Profile
        </Link>
        <span className="badge badge-danger ml-auto">{user.cart.length}</span>
      </nav>
    );
  }
}

export default NavBar;
