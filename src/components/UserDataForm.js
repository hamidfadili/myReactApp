import React, { Component } from "react";
import { UPDATE_USER } from "../redux/actionTypes";
import store from "../redux/store";
import Input from "./Input";

export default class UserDataForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    this.setState(store.getState().user);
  };

  handelSubmit = (e) => {
    store.dispatch({ type: UPDATE_USER, payload: { ...this.state } });
    e.preventDefault();
  };

  onFormUpdated = ({ currentTarget: input }) => {
    const user = { ...this.state };
    user[input.name] = input.value;
    this.setState({ ...user });
  };

  render() {
    return (
      <div className="p-2">
        <form onSubmit={this.handelSubmit}>
          <Input
            id="firstName"
            label="First name"
            onChange={this.onFormUpdated}
            value={this.state.firstName}
          />
          <Input
            id="lastName"
            label="Last name"
            onChange={this.onFormUpdated}
            value={this.state.lastName}
          />
          <Input
            id="email"
            label="Email address"
            onChange={this.onFormUpdated}
            value={this.state.email}
            type="email"
          />
          <Input
            id="password"
            label="Password"
            onChange={this.onFormUpdated}
            value={this.state.password}
            type="password"
          />
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}
