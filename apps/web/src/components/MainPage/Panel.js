import React, { Component } from 'react';
import DefaultSongsList from './DefaultSongsList';
import UserSongsList from './UserSongsList';

export default class Panel extends Component {
  defaultMusicList = new DefaultSongsList(this.props);
  userMusicList = new UserSongsList(this.props);

  panelStartPlay = () => {
    const {
      songId,
      songCount,
      songPrivacy,
      title,
      defaultSongs,
      userSongs
    } = this.props;

    if(!songId) {
      alert('Please, start listen music in menu');
    } else {
      if (songPrivacy === 'default') {
        const track = defaultSongs.find(item => item.title === title);
        this.defaultMusicList.startPlay(songId, songCount, track);
      }

      if (songPrivacy === 'user') {
        const track = userSongs.find(item => item.title === title);
        this.userMusicList.startPlay(songId, songCount, track);
      }
    }
  };

  panelPlayNext() {
    const { songPrivacy } = this.props;

    if (!songPrivacy) {
      alert('Error(play next)');
      return;
    }

    if (songPrivacy === 'default') {
      this.defaultMusicList.playNext(this.props);
    }
  }

  panelPlayPrevious() {
    const { songPrivacy } = this.props;

    if (!songPrivacy) {
      alert('Error(play previous)')
    }

    if (songPrivacy === 'default') {
      this.defaultMusicList.playPrevious(this.props);
    }
  }

  panelPausePlay = () => {
    const { songId, songPrivacy } = this.props;

    if (songPrivacy === 'default') {
      this.defaultMusicList.stopPlay(songId);
    }

    if (songPrivacy === 'user') {
      this.userMusicList.stopPlay(songId);
    }
  };

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   return this.props;
  // }

  render() {
    return(
      <div className="menu" id="panel">
        <div className="round-external">
            <span className="icon">
              <img src={require('../../images/iconfinder_icon-shuffle_211887.png')} className="img-shadow" alt="/" />
            </span>

          <span className="icon">
              <img src={require('../../images/iconfinder_icon-ios7-skipforward_211822.png')} onClick={() => this.panelPlayNext()} className="img-shadow" alt="/" />
            </span>


          <span className="icon">
              <img id="panelPlay" onClick={() => this.panelStartPlay()} src={require('../../images/iconfinder_icon-play_211876.png')} className="img-shadow music-panel-play" alt="" />
              <img id="panelPause" onClick={() => this.panelPausePlay()} src={require('../../images/iconfinder_icon-ios7-pause_211791.png')} className="img-shadow music-panel-pause" alt="" />
            </span>

          <span className="icon">
              <img src={require('../../images/iconfinder_icon-ios7-skipbackward_211820.png')} onClick={() => this.panelPlayPrevious()} className="img-shadow" alt="" />
            </span>

          <span className="icon">
              <img src={require('../../images/iconfinder_icon-loop_211856.png')} className="img-shadow" alt="" />
            </span>
          <div className="round-internal"></div>
        </div>
      </div>
    )
  }

}
