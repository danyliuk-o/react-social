import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import classes from "./../common/FormsControls/FormsControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.error) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Email</label>
        <Field
          name={"email"}
          component={Input}
          type="text"
          placeholder={"Email"}
          validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          name={"password"}
          component={Input}
          type="text"
          placeholder={"Password"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          component={Input}
          type="checkbox"
          placeholder={"Remember me"}
          validate={[required]}
        />
      </div>
      {props.error && <div className={classes.formError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
