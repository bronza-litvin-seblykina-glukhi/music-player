import React from 'react';
import './Registration.scss';
import RegistreationForm from './RegistreationForm';


export default class Registration extends React.Component {
    render() {
        return (
            <div className="auth-page">
                <div className="card">
                    <div className="auth-form">
                        <RegistreationForm/>
                    </div>
                </div>
            </div>
        );
    }
}