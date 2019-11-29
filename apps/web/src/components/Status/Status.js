import React from 'react';
import {getToken} from "../../helpers/localStorage";

export default class Status extends React.Component {

    render() {
        if (getToken() !== null) {

            console.log(getToken());
            return (
                <div className="status">
                    <li className="user-name"><span className='userName'>Username</span></li>
                    <li className="user-icon"><img alt="icon" src="../../images/user_icon.png"/></li>
                </div>
            );
        } else {
            return (
                <li className="log-in">
                    <a href="/login">Log In</a>
                </li>
            );
        }
    }

}