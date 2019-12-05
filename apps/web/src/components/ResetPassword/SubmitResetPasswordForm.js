import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import FormInput from '../../shared/FormInput/FormInput';
import {validateSubmitResetPassword} from "../../redux/modules/auth";

const validateFormFields = ['password', 'rePassword'];

const validate = (values, props) => {
    const errors = {};

    const {password,rePassword} = values;

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
        case rePassword !== password:
            errors.rePassword = "Passwords don't match";
            break;
    }

    return errors;
};


@reduxForm({
    form: 'submitReset',
    fields: validateFormFields,
    validate,
    touchOnChange: true
})
export default class LoginForm extends Component {
    onSubmit = (values) => {
        this.props.dispatch(validateSubmitResetPassword(values.password,values.rePassword));
    };

    render() {
        const password = this.props.fields.password;
        const rePassword = this.props.fields.rePassword;

        return (
            <div>
                <form>
                    <div className="reset-header">Please enter new password for your account and repeat it.</div>
                    <FormInput
                        className="password-field"
                        field={password}
                        type="password"
                        placeholder="New Password"
                    />
                    <FormInput
                        className="repeat-password-field"
                        field={rePassword}
                        type="password"
                        placeholder="Repeat New Password"
                    />
                    <button
                        className="reset-button"
                        type="submit"
                    >
                        Apply New Password
                    </button>
                </form>
            </div>
        );
    }
}