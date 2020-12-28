import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const user = this.props.user;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Welcome{" "}
          <b>
            <i>{user.firstName}</i>
          </b>
        </span>
        <span className="badge badge-danger ml-auto">{user.cart.length}</span>
      </nav>
    );
  }
}

export default NavBar;
