import React from "react";
import { Field } from "formik";
import camelCase from "lodash/camelCase";

function LabeledField(props) {
  let name = camelCase(props.label);
  return (
    <div className="form-group">
      <label htmlFor={name}>{props.label}</label>
      <Field
        className="form-control"
        name={name}
        placeholder={props.label}
        id={name}
        {...props}
      />
    </div>
  );
}

export default LabeledField;
