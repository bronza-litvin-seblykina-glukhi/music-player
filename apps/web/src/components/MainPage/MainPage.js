import React, { Component } from 'react';
import './MainPage.scss';
import Panel from './Panel';
import MusicList from './MusicList';
import {connect} from "react-redux";

@connect(
    state => ({
        auth: state.auth,
    }),
    dispatch => ({
        dispatch
    })
)
export default class MainPage extends Component {
  render() {
    return(
      <div className="body">
        <Panel/>
        <MusicList dispatch={this.props.dispatch} auth={this.props.auth}/>
      </div>
    )
  }
}
