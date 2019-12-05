import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import FormInput from '../../shared/FormInput/FormInput';
import {validateResetPassword} from "../../redux/modules/auth";
import history from '../../redux/history';

const validateFormFields = ['login', 'email'];

const validate = (values, props) => {
    const errors = {};

    const {login, email} = values;

    const commonValidate = (field, regexp, errMsg) => {
        let error;
        if (!regexp.test(field)) {
            error = errMsg;
        }
        return error;
    };

    switch (true) {
        case !email:
            errors.email = 'Email is required';
            break;
        case (!commonValidate(email, /[@]/, true) && commonValidate(email, /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, true)):
            errors.email = 'Incorrect email address';
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
    form: 'resetPassword',
    fields: validateFormFields,
    validate,
    touchOnChange: true
})
export default class LoginForm extends Component {
    onSubmit = (values) => {
        this.props.dispatch(validateResetPassword(values.login,values.email));
        this.props.dispatch({type: 'VALIDATE_USER_DATA', login: values.login, email: values.email});
        history.push('/submitReset')
    };

    render() {
        const login = this.props.fields.login;
        const email = this.props.fields.email;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="reset-header">Please enter your login and email to regain access to your account.</div>
                    <FormInput
                        className="login-field"
                        field={login}
                        type="text"
                        placeholder="Login"
                    />
                    <FormInput
                        className="email-field"
                        field={email}
                        type="text"
                        placeholder="E-mail"
                    />
                    <button
                        className="reset-button"
                        type="submit"
                    >
                        Reset Lost Password
                    </button>
                </form>
            </div>
        );
    }
}