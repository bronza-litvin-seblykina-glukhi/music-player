import React from 'react';
import {getOauth} from "../../helpers/localStorage";

export default class Status extends React.Component {

    render() {
        if (getOauth() === null) {
            return (
                <div className="status">
                    <li className="user-name"><span className='userName'>Username</span></li>
                    <li className="user-icon"><img alt="icon" src="../../images/user_icon.png"/></li>
                </div>
            );
        }

        return (

            <li className="log-in">
                <a href="/login">Log In</a>
            </li>
        );
    }

}