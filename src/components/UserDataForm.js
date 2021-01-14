import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { UPDATE_USER } from "../redux/actionTypes";
import store from "../redux/store";
import Input from "./Input";
import LabeledField from "../reusable/LabeledField";

export default class UserDataForm extends Component {
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

  handelSubmit = (values) => {
    store.dispatch({ type: UPDATE_USER, payload: { ...values } });
  };

  onFormUpdated = ({ currentTarget: input }) => {
    const user = { ...this.state };
    user[input.name] = input.value;
    this.setState({ ...user });
  };

  render() {
    return (
      <Formik
        className="p-2"
        initialValues={store.getState().user}
        onSubmit={this.handelSubmit}
      >
        <Form>
          <LabeledField label="First name" />
          <LabeledField label="Last name" />
          <LabeledField label="Email" type="email" />
          <LabeledField label="Password" type="password" />
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </Form>
      </Formik>
    );
  }
}
