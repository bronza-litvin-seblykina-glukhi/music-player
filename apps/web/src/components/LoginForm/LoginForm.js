import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import FormInput from '../../shared/FormInput/FormInput';
import {login as loginAction} from '../../redux/modules/auth';

const validateFormFields = ['password', 'login'];

const validate = (values, props) => {
    const errors = {};

    const {login, password} = values;

    const commonValidate = (field, regexp, errMsg) => {
        let error;
        if (!regexp.test(field)) {
            error = errMsg;
        }
        return error;
    };

    switch (true) {
        case !password:
            errors.password = 'Password is required';
            break;
        case commonValidate(password, /^.{8,}$/, true):
            errors.password = 'Password must be more than 8 characters';
            break;
        case commonValidate(password, /[0-9]/, true):
            errors.password = 'Password must contain at least 1 digit';
            break;
        case commonValidate(password, /[A-Za-z]/, true):
            errors.password = 'Password must contain at least 1 letter';
            break;
        default:
            break;
    }

    switch (true) {
        case !login:
            errors.login = 'Login is required';
            break;
        case commonValidate(login, /^.{8,}$/, true):
            errors.login = 'Login must be more than 8 characters';
            break;
        case commonValidate(login, /^[$&+,_:;=?@#|'<>.^*()%!a-zA-ZА0-9\s-]{0,255}$/, true):
            errors.login = 'Login should have only Latin symbols';
            break;
        case commonValidate(login, /^[@\-_.a-zA-Z0-9\s-]{0,255}$/, true):
            errors.login = 'Login shouldn\'t have special symbols';
            break;
        case commonValidate(login, /^[@-_.a-zA-ZА0-9,-]{0,255}$/, true):
            errors.login = 'Login shouldn\'t have spaсes';
            break;
        case (!commonValidate(login, /[@]/, true) && commonValidate(login, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, true)):
            errors.login = 'Incorrect email address';
            break;
        default:
            break;
    }
    return errors;
};


@reduxForm({
    form: 'loginSimple',
    fields: validateFormFields,
    validate,
    touchOnChange: true
})
export default class LoginForm extends Component {
    onSubmit = (values) => {
        this.props.dispatch(loginAction(values.login, values.password));
        this.props.dispatch({type: 'LOGIN', username: values.login, password: values.password})
    };

    render() {
        const login = this.props.fields.login;
        const password = this.props.fields.password;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <FormInput
                        className="login-field"
                        field={login}
                        type="text"
                        placeholder="Login"
                    />
                    <FormInput
                        className="password-field"
                        field={password}
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="login-button"
                        type="submit"
                    >
                        Sign In
                    </button>
                </form>
                <div className="server-error">{(typeof (this.props.auth.getIn(['loginError'])) !== 'undefined' &&
                    this.props.auth.getIn(['loginError']) !== null) ?
                    'Your Login or Password is incorrect, please try again' : ''}</div>
                <a href="/resetPassword" className="forget-password-button">{'> Forget your password?'}</a>
                <a href="/registration" className="create-account-button">{'> Create account'}</a>
            </div>
        );
    }
}
