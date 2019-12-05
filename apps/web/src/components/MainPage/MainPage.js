import React, { Component } from 'react';
import './MainPage.scss';
import Panel from './Panel';
import DefaultSongsList from './DefaultSongsList';
import UserSongsList from './UserSongsList';
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

  changeSongsListToUser() {
    const defaultSongs = document.getElementById('defaultSongs');
    const userSongs = document.getElementById('userSongs');

    defaultSongs.style.display = 'none';
    userSongs.style.display = 'inline-block';
    document.getElementById('defaultButton').classList.remove('active');
    document.getElementById('userButton').classList.add('active')
  }

  changeSongsListToDefault() {
    const userSongs = document.getElementById('userSongs');
    const defaultSongs = document.getElementById('defaultSongs');

    userSongs.style.display = 'none';
    defaultSongs.style.display = 'inline-block';
    document.getElementById('userButton').classList.remove('active');
    document.getElementById('defaultButton').classList.add('active')
  }

  render() {
    return(
      <div className="body">
        <Panel dispatch={this.props.dispatch}
               songId={this.props.songId}
               songsCount={this.props.songsCount}
               songPrivacy={this.props.songPrivacy}
        />
        <div className="lists">
           <span className="navigation">
            <button id="defaultButton" className="navigation-button active" onClick={(e) => this.changeSongsListToDefault(e)}>
              <span className="btn-text">Default songs</span>
            </button>

            <button id="userButton" className="navigation-button" onClick={(e) => this.changeSongsListToUser(e)}>
              <span className="btn-text">User Songs</span>
            </button>
          </span>
          <span className="music-list-default" id="defaultSongs">
            <DefaultSongsList dispatch={this.props.dispatch}
                              defaultSongs={this.props.defaultSongs}
                              songId={this.props.songId}
                              songsCount={this.props.songsCount}
                              songPrivacy={this.props.songPrivacy}
            />
          </span>

          <span className="music-list-user" id="userSongs">
            <UserSongsList dispatch={this.props.dispatch}
                           defaultSongs={this.props.defaultSongs}
                           userSongs={this.props.userSongs}
                           songId={this.props.songId}
                           songsCount={this.props.songsCount}
                           songPrivacy={this.props.songPrivacy}
            />
          </span>
        </div>
      </div>
    )
  }
}
