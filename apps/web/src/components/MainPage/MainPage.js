import React, { Component } from 'react';
import './MainPage.scss';
import Panel from './Panel';
import MusicList from './MusicList';
import {connect} from "react-redux";

@connect(
    state => ({
        auth: state.auth,
        songs: state.songs,
        songslist: state.songslist
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
        <MusicList dispatch={this.props.dispatch} auth={this.props.auth} songs={this.props.songs}
        songslist={this.props.songslist}/>
      </div>
    )
  }
}
