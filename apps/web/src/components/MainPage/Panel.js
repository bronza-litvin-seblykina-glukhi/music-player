import React, { Component } from 'react';
import MusicList from './MusicList';

export default class Panel extends Component {
  musicList = new MusicList(this.props);

  panelStartPlay = () => {
    const { songId, songCount } = this.props;

    if(!songId) {
      alert('Please, start listen music in menu');
    } else {
      this.musicList.startPlay(songId, songCount);
      document.getElementById('panelPlay').style.display = 'none';
      document.getElementById('panelPause').style.display = 'inline-block';
    }
  };

  panelPausePlay = () => {
    const { songId } = this.props;

    this.musicList.stopPlay(songId);
    document.getElementById('panelPause').style.display = 'none';
    document.getElementById('panelPlay').style.display = 'inline-block';
  };

  render() {
    return(
      <div className="menu" id="panel">
        <div className="round-external">
            <span className="icon">
              <img src={require('../../images/iconfinder_icon-shuffle_211887.png')} className="img-shadow" alt="/" />
            </span>

          <span className="icon">
              <img src={require('../../images/iconfinder_icon-ios7-skipforward_211822.png')} className="img-shadow" alt="/" />
            </span>


          <span className="icon">
              <img id="panelPlay" onClick={() => this.panelStartPlay()} src={require('../../images/iconfinder_icon-play_211876.png')} className="img-shadow music-panel-play" alt="" />
              <img id="panelPause" onClick={() => this.panelPausePlay()} src={require('../../images/iconfinder_icon-ios7-pause_211791.png')} className="img-shadow music-panel-pause" alt="" />
            </span>

          <span className="icon">
              <img src={require('../../images/iconfinder_icon-ios7-skipbackward_211820.png')} className="img-shadow" alt="" />
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
