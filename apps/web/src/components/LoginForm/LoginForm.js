import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import FormInput from '../../shared/FormInput/FormInput';

const validateFormFields = ['password', 'login'];

const validate = (values, props) => {
  const errors = {};
  
  const { login, password } = values;
  
  const commonValidate = (field, regexp, errMsg) => {
    let error;
    if (!regexp.test(field)) {
      error = errMsg;
    }
    return error;
  };
  
  return errors;
};


@reduxForm({
  form: 'loginSimple',
  fields: validateFormFields,
  validate,
  touchOnChange: true
})
export default class LoginForm extends Component {
  // submit = (values) => {
  //   this.props.dispatch(loginAction(values.login, values.password, this.rememberMe.checked));
  // };
  
  render() {
    const login = this.props.fields.login;
    const password = this.props.fields.password;
    
    return (
      <div>
        <form onSubmit={() => {}}>
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
      </div>
    );
  }
}
