import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import UserData from "./UserData";
import UserDataForm from "./UserDataForm";

class UserSpace extends Component {
  render() {
    const { path, url } = this.props.match;
    return (
      <div className="p-2">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink exact className="nav-link" to={url}>
              User Data
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`${url}/form`}>
              Edit User
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={`${path}/form`} component={UserDataForm} />
          <Route path={path} component={UserData} />
        </Switch>
      </div>
    );
  }
}

export default UserSpace;
