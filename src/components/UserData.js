import React, { Component } from "react";
import UserContext from "../contexts/UserContext";
import Input from "./Input";

export default class UserData extends Component {
  static contextType = UserContext;
  showUser = (e) => {
    console.log(this.context);
    e.preventDefault();
  };

  onFormUpdated = ({ currentTarget: input }) => {
    const user = { ...this.context.user };
    user[input.name] = input.value;
    this.context.onChange(user);
  };

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <div className="p-2">
            <form onSubmit={this.showUser}>
              <Input
                id="firstName"
                label="First name"
                onChange={this.onFormUpdated}
                value={user.firstName}
              />
              <Input
                id="lastName"
                label="Last name"
                onChange={this.onFormUpdated}
                value={user.lastName}
              />
              <Input
                id="email"
                label="Email address"
                onChange={this.onFormUpdated}
                value={user.email}
                type="email"
              />
              <Input
                id="password"
                label="Password"
                onChange={this.onFormUpdated}
                value={user.password}
                type="password"
              />
              <button onClick={this.showUser} className="btn btn-primary">
                Update
              </button>
            </form>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
