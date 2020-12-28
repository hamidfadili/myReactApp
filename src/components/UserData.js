import React, { Component } from "react";
import Input from "./Input";

export default class UserData extends Component {
  showUser = (e) => {
    console.log(this.props.user);
    e.preventDefault();
  };

  onFormUpdated = ({ currentTarget: input }) => {
    const user = { ...this.props.user };
    user[input.name] = input.value;
    this.props.onChange(user);
  };

  render() {
    const user = this.props.user;
    return (
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
    );
  }
}
