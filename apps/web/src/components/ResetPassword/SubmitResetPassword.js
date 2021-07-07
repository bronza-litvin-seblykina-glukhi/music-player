import React from 'react';
import SubmitResetPasswordForm from './SubmitResetPasswordForm';
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
export default class SubmitResetPassword extends React.Component {
    render() {
        return (
            <div className="reset-page">
                <div className="card">
                    <div className="reset-form">
                        <SubmitResetPasswordForm auth={this.props.auth}/>
                    </div>
                </div>
            </div>
        );
    }
}