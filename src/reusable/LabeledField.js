import React from "react";
import { ErrorMessage, Field } from "formik";
import camelCase from "lodash/camelCase";
import cn from "classnames";

function LabeledField(props) {
  let name = camelCase(props.label);
  return (
    <div className="form-group">
      <label htmlFor={name}>{props.label}</label>
      <Field name={name} placeholder={props.label} id={name} {...props}>
        {({ field, meta }) => (
          <input
            {...field}
            className={cn("form-control", {
              "is-invalid": meta.touched && meta.error,
            })}
          />
        )}
      </Field>
      <ErrorMessage
        name={name}
        render={(message) => <small className="text-danger">{message}</small>}
      />
    </div>
  );
}

export default LabeledField;
