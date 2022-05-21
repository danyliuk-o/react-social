import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from "./../common/FormsControls/FormsControls.module.css";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormOwnPropsType = {
    captcha: string | null
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const {login, isAuth, captchaUrl} = props
    const onSubmit = (formData: LoginFormValuesType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };


    if (isAuth) {
        return <Redirect to={"/profile"}/>;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captchaUrl}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (props) => {
    const {handleSubmit, error, captcha} = props;
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
            {captcha && <img src={captcha} alt="captcha"/>}
            {captcha &&
                <Field
                    placeholder={'Symbols from image'}
                    name={'captcha'}
                    component={Input}
                    validate={[required]}
                    type={'text'}/>}
            {error && <div className={classes.formError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({
    form: "login",
})(LoginForm);

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);
