import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import './ResetPassword.scss';
import {connect} from "react-redux";

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
            <div className="reset-page">
                <div className="card">
                    <div className="reset-form">
                        <ResetPasswordForm auth={this.props.auth}/>
                    </div>
                </div>
            </div>
        );
    }
}