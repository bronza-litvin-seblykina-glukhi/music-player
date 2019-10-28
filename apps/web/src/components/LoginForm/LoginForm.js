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
  switch (true) {
    case !password:
      errors.password = 'Password is required';
      break;
    case commonValidate(password, /^.{5,}$/, true):
      errors.password = 'Password must be more than 5 characters';
      break;
    case commonValidate(password, /^.{1,50}$/, true):
      errors.password = 'Password must be no more than 50 characters';
      break;
    default:
      break;
  }
  
  switch (true) {
    case !login:
      errors.login = 'Login is required';
      break;
    case commonValidate(login, /^.{5,}$/, true):
      errors.login = 'Login must be more than 5 characters';
      break;
    case commonValidate(login, /^.{0,255}$/, true):
      errors.login = 'Login must be no more than 255 characters';
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
