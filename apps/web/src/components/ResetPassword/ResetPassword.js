import React from 'react';
import {connect} from 'react-redux';
import DataVerifyForm from './ResetPasswordForm';
import './ResetPassword.scss';


export default class Login extends React.Component {
    render() {
        return (
            <div className="reset-page">
                <div className="card">
                    <div className="reset-form">
                        <DataVerifyForm/>
                    </div>
                </div>
            </div>
        );
    }
}