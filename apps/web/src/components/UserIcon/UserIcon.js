import React from 'react';
import {getUsername} from "../../helpers/sessionStorage";

export default class Status extends React.Component {
    render() {
        return (
            <div className="status">
                <li className="user-name"><span className='userName'>{getUsername()}</span></li>
                <li className="user-icon"><img alt="icon" src={require('../../images/user_icon.png')}/></li>
            </div>
        );
    }
}