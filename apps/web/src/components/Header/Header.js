import React from 'react';
import './Header.scss';
import {getOauth} from "../../helpers/localStorage";
import Status from "../Status/Status";

export default class Registration extends React.Component {

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
                            <Status/>
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