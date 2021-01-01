import React, { Component } from "react";
import UserContext from "../contexts/UserContext";

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
          <div className="p-2 mt-2">
            <p>
              <b>Name : </b> {`${user.firstName} ${user.lastName}`}
            </p>
            <p>
              <b>Email : </b> {user.email}
            </p>
            <p>
              <b>Password : </b> {user.password.replaceAll(/./g, "*")}
            </p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
