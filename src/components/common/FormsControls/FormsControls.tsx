import React from "react";
import classes from "./FormsControls.module.css";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
    children: any
}

export const FormControl: React.FC<FormControlPropsType> = ({meta, children}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${classes.formControl} ${classes.error}` : classes.formControl}>
            {children}
            {hasError && <span className={classes.errorMessage}>{meta.error}</span>}
        </div>
    )
}


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    );
};