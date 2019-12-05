import React from 'react';
import SubmitResetPasswordForm from './SubmitResetPasswordForm';
import './ResetPassword.scss';

export default class Login extends React.Component {
    render() {
        return (
            <div className="reset-page">
                <div className="card">
                    <div className="reset-form">
                        <SubmitResetPasswordForm/>
                    </div>
                </div>
            </div>
        );
    }
}