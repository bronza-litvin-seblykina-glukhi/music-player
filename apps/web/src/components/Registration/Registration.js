import React from 'react';
import './Registration.scss';
import RegistreationForm from './RegistreationForm';
import {connect} from "react-redux";

@connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        dispatch
    })
)
export default class Registration extends React.Component {
    render() {
        return (
            <div className="auth-page">
                <div className="card">
                    <div className="auth-form">
                        <RegistreationForm auth={this.props.auth}/>
                    </div>
                </div>
            </div>
        );
    }
}