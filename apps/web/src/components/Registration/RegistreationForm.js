import React, {Component} from 'react';
import FormInput from '../../shared/FormInput/FormInput';
import {reduxForm} from 'redux-form';
import {registration} from '../../redux/modules/auth';
import history from '../../redux/history/history'
import {setOauth} from "../../helpers/localStorage";

const validateFormFields = ['firstName', 'lastName', 'username', 'email', 'password', 'rePassword'];

const validate = (values, props) => {
    const errors = {};

    const {firstName, lastName, username, email, password, rePassword} = values;

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
        case !username:
            errors.username = 'Username is required';
            break;
        case commonValidate(username, /^.{8,}$/, true):
            errors.username = 'Username must be more than 8 characters';
            break;
        case commonValidate(username, /^[$&+,_:;=?@#|'<>.^*()%!a-zA-ZА0-9\s-]{0,255}$/, true):
            errors.username = 'Username should have only Latin symbols';
            break;
        case commonValidate(username, /^[@\-_.a-zA-Z0-9\s-]{0,255}$/, true):
            errors.username = 'Username shouldn\'t have special symbols';
            break;
        case commonValidate(username, /^[@-_.a-zA-ZА0-9,-]{0,255}$/, true):
            errors.username = 'Username shouldn\'t have spaсes';
            break;
        default:
            break;
    }

    switch (true) {
        case !firstName:
            errors.firstName = 'First name is required';
            break;
        case commonValidate(firstName, /^.{8,}$/, true):
            errors.firstName = 'First name must be more than 8 characters';
            break;
        case commonValidate(firstName, /^[$&+,_:;=?@#|'<>.^*()%!a-zA-ZА0-9\s-]{0,255}$/, true):
            errors.firstName = 'First name should have only Latin symbols';
            break;
        case commonValidate(firstName, /^[@\-_.a-zA-Z0-9\s-]{0,255}$/, true):
            errors.firstName = 'First name shouldn\'t have special symbols';
            break;
        case commonValidate(firstName, /^[@-_.a-zA-ZА0-9,-]{0,255}$/, true):
            errors.firstName = 'First name shouldn\'t have spaсes';
            break;
        default:
            break;
    }

    switch (true) {
        case !lastName:
            errors.lastName = 'Last name is required';
            break;
        case commonValidate(lastName, /^.{8,}$/, true):
            errors.lastName = 'Last name must be more than 8 characters';
            break;
        case commonValidate(lastName, /^[$&+,_:;=?@#|'<>.^*()%!a-zA-ZА0-9\s-]{0,255}$/, true):
            errors.lastName = 'Last name should have only Latin symbols';
            break;
        case commonValidate(lastName, /^[@\-_.a-zA-Z0-9\s-]{0,255}$/, true):
            errors.lastName = 'Last name shouldn\'t have special symbols';
            break;
        case commonValidate(lastName, /^[@-_.a-zA-ZА0-9,-]{0,255}$/, true):
            errors.lastName = 'Last name shouldn\'t have spaсes';
            break;
        default:
            break;
    }

    switch (true) {
        case rePassword !== password:
            errors.rePassword = "Passwords don't match";
            break;
    }

    return errors;
};


@reduxForm({
    form: 'registration',
    fields: validateFormFields,
    validate,
    touchOnChange: true
})

export default class RegistreationForm extends Component {

    onSubmit = async (values) => {
        this.props.dispatch(registration(values.username, values.password, values.email, values.rePasswordcc));
        await fetch('http://localhost:3001/api/user/register', {
            headers: {'Content-Type': 'application/json'},
            method: 'post',
            body: JSON.stringify({
                "firstName": values.firstName,
                "lastName": values.lastName,
                "login": values.username,
                "password": values.password,
                "role": 'client',
                "email": values.email,
                "paidSubscription": true
            })
        }).then(response => {
            if (response.ok === true) {
                history.push("/login")
            } else {
                return response;
            }
        }).catch(e => console.log(e))
    };

    render() {
        const username = this.props.fields.username;
        const email = this.props.fields.email;
        const password = this.props.fields.password;
        const rePassword = this.props.fields.rePassword;
        const firstName = this.props.fields.firstName;
        const lastName = this.props.fields.lastName;

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <FormInput
                        className="first-name-field"
                        field={firstName}
                        type="text"
                        placeholder="First name"
                    />
                    <FormInput
                        className="last-name-field"
                        field={lastName}
                        type="text"
                        placeholder="Last name"
                    />
                    <FormInput
                        className="username-field"
                        field={username}
                        type="text"
                        placeholder="Username"
                    />
                    <FormInput
                        className="email-field"
                        field={email}
                        type="text"
                        placeholder="E-mail"
                    />
                    <FormInput
                        className="password-field"
                        field={password}
                        type="password"
                        placeholder="Password"
                    />
                    <FormInput
                        className="repeat-password-field"
                        field={rePassword}
                        type="password"
                        placeholder="Repeat password"
                    />
                    <button
                        className="reg-button"
                        type="submit"
                    >
                        Join now!
                    </button>
                    <div className="reg-login-link"><a href="/login">>Already have an account? Log in</a></div>
                </form>
            </div>
        );
    }
}
