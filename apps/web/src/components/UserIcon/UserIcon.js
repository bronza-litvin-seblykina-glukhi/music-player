import React from 'react';

export default class Status extends React.Component {
    render() {
        return (
            <div className="status">
                <li className="user-name"><span className='userName'>Username</span></li>
                <li className="user-icon"><img alt="icon" src={require('../../images/user_icon.png')}/></li>
            </div>
        );
    }
}