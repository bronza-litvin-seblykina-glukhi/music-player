import React from 'react';
import './Login.scss';
import LoginForm from '../LoginForm/LoginForm';
// import LoginForm from '../LoginForm/LoginForm';


export default class Login extends React.Component {
  render() {
    console.log(1123124);
    return (
      <div className="login-page">
        <div className="card">
          <div className="login-form">
            <LoginForm/>
          </div>
        </div>
      </div>
    );
  }
}
