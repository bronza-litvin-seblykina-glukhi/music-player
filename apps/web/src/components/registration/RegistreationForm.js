import React, { Component } from 'react';
import FormInput from '../../shared/FormInput/FormInput';

export default class RegistreationForm extends Component {
  
  render() {
    
    return (
      <div>
        <form onSubmit={() => {}}>
          <FormInput
            className="username-field"
            field=""
            type="text"
            placeholder="Username"
          />
          <FormInput
              className="email-field"
              field=""
              type="text"
              placeholder="E-mail"
          />
          <FormInput
            className="password-field"
            field=""
            type="password"
            placeholder="Password"
          />
          <FormInput
              className="repeat-password-field"
              field=""
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
