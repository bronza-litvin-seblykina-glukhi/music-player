import React from 'react';
import history from '../../redux/history';
import {connect} from "react-redux";
import {LOGOUT} from "../../redux/modules/auth";

@connect(
    state => ({
        auth: state.auth
    }),
    dispatch => ({
        dispatch
    })
)
export default class Logout extends React.Component {

    componentDidMount() {
        sessionStorage.clear();
        this.props.dispatch({type: LOGOUT});
        history.push('/');
    }

    render() {
        return null;
    }
}