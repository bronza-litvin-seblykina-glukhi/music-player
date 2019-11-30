import React from 'react';
import './Header.scss';
import {getToken} from '../../helpers/localStorage';
import LoginTab from '../LoginTab/LoginTab';
import UserIcon from '../UserIcon/UserIcon'


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {token: getToken()};
        this.onLoad = this.onLoad.bind(this);
    }

    onLoad = () => {
        this.setState({
            token: getToken()
        });
    };

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
                            {(this.state.token === null) ? <LoginTab/> : <UserIcon/>}
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