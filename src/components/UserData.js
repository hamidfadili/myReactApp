import React, { Component } from "react";
import store from "../redux/store";
import repeat from "lodash/repeat";

export default class UserData extends Component {
  state = {};
  unsubscribe = null;

  componentDidMount() {
    this.refresh();
    this.unsubscribe = store.subscribe(this.refresh);
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {
    const { user } = store.getState();
    this.setState({ ...user });
  };

  render() {
    if (!this.state.password) return <div>No user Data!!</div>;
    return (
      <div className="p-2 mt-2">
        <p>
          <b>Name : </b> {`${this.state.firstName} ${this.state.lastName}`}
        </p>
        <p>
          <b>Email : </b> {this.state.email}
        </p>
        <p>
          <b>Password : </b> {repeat("*", this.state.password.length)}
        </p>
      </div>
    );
  }
}
