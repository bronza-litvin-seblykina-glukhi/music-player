import React from 'react';
import './Header.scss';
import {getToken} from '../../helpers/sessionStorage';
import LoginTab from '../LoginTab/LoginTab';
import UserIcon from '../UserIcon/UserIcon'
import {connect} from "react-redux";
import RegistrationTab from '../RegistrationTab/RegistrationTab';

@connect(
    state => ({
        auth: state.auth,
        view: state.view
    }),
    dispatch => ({
        dispatch
    })
)
export default class Header extends React.Component {

    render() {

        return (
            <nav className="navbar">
                <nav>
                    <div>
                        <ul className="nav-links">
                            <li className="search-section">
                                <form>
                                    <input className="search-input" type="search" placeholder="Search"/>
                                </form>
                            </li>
                            { (getToken() === null) ?
                                ((!this.props.view.isLoginPage)?<LoginTab/>: <RegistrationTab/>)
                                : <UserIcon/>}
                            <div className="headlines">
                                <li>
                                    <a href="#">New Releases</a>
                                </li>
                                <li>
                                    <a href="#">Genres</a>
                                </li>
                                <li>
                                    <a href="#">Popular</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </nav>
        );
    }
}