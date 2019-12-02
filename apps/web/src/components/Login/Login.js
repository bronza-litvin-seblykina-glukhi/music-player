import React from 'react';
import { connect } from 'react-redux';
import './Login.scss';
import LoginForm from '../LoginForm/LoginForm';

@connect(
  state => ({
    auth: state.auth,
  }),
  dispatch => ({
    dispatch
  })
)
export default class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="card">
          <div className="login-form">
            <LoginForm
              dispatch={this.props.dispatch}
              auth={this.props.auth}
            />
          </div>
        </div>
      </div>
    );
  }
}
