import React from "react";
import classes from "./FormsControls.module.css";

export const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div
      className={
        hasError
          ? `${classes.formControl} ${classes.error}`
          : classes.formControl
      }
    >
      {props.children}
      {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

// const CustomField = () => {
//     return (
//
//     )
// }
