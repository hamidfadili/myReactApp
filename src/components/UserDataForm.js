import React, { Component } from "react";
import { Formik, Form } from "formik";
import { UPDATE_USER } from "../redux/actionTypes";
import store from "../redux/store";
import * as Yup from "yup";
import LabeledField from "../reusable/LabeledField";

export default class UserDataForm extends Component {
  handelSubmit = (values) => {
    store.dispatch({ type: UPDATE_USER, payload: { ...values } });
  };

  validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Should be at least 3 charcters")
      .max(59, "should not be more than 50")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Should be at least 3 charcters")
      .max(59, "should not be more than 50")
      .required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(6, "Should be at least 6 charcters")
      .max(50, "Should not be more than 50"),
  });

  render() {
    return (
      <Formik
        className="p-2"
        initialValues={store.getState().user}
        onSubmit={this.handelSubmit}
        validationSchema={this.validationSchema}
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
