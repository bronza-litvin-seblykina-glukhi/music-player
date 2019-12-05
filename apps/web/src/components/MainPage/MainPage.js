import React, { Component } from 'react';
import './MainPage.scss';
import Panel from './Panel';
import MusicList from './MusicList';
import { connect } from "react-redux";

@connect(
    state => {
        return ({
          songId: state.songsReducer.index,
          songsCount: state.songsReducer.songs,
          songPrivacy: state.songsReducer.songPrivacy,
          defaultSongs: state.songslist.defaultSongs,
          userSongs: state.songslist.userSongs
        });
    },
    dispatch => ({
        dispatch
    })
)
export default class MainPage extends Component {
  render() {
    return(
      <div className="body">
        <Panel dispatch={this.props.dispatch}
               defaultSongs={this.props.defaultSongs}
               userSongs={this.props.userSongs}
               songId={this.props.songId}
               songsCount={this.props.songsCount}
               songPrivacy={this.props.songPrivacy}
        />
        <MusicList dispatch={this.props.dispatch}
                   defaultSongs={this.props.defaultSongs}
                   userSongs={this.props.userSongs}
                   songId={this.props.songId}
                   songsCount={this.props.songsCount}
                   songPrivacy={this.props.songPrivacy}
        />
      </div>
    )
  }
}
