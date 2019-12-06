import React, { Component } from 'react'
import songslist from "../../redux/modules/songslist";
import songs from '../../redux/modules/songs';

export default class UserSongsList extends Component {

  startPlay(index, countOfSons) {
    const { songId } = this.props;
    this.props.dispatch({ type: 'SET_PLAY_TRACK_INFO', i: index, songs: countOfSons, songPrivacy: 'user' });

    if (songId && songId !== index) {
      const oldAudio = `userAudio${songId}`;
      const oldPlayIcon = `userPlayIcon${songId}`;
      const oldStopIcon = `userStopIcon${songId}`;

      document.getElementById(oldAudio).pause();
      document.getElementById(oldStopIcon).style.display = 'none';
      document.getElementById(oldPlayIcon).style.display = 'inline-block';
    }

    const doc = document.getElementById('userAudio' + index);
    document.getElementById('userPlayIcon' + index).style.display = 'none';
    document.getElementById('userStopIcon' + index).style.display = 'inline-block';
    document.getElementById('panelPlay').style.display = 'none';
    document.getElementById('panelPause').style.display = 'inline-block';

    doc.play();
    doc.addEventListener('ended', () => {
      doc.currentTime = 0;
      this.stopPlay(index);
      this.playNext(index);
    });

    return null;
  };

  playNext(index) {
    const { songId, songsCount } = this.props;

    if(index === songsCount) {
      return this.stopPlay(index);
    }
    else {
      return this.startPlay(songId + 1, songsCount);
    }
  };

  stopPlay (index) {
    const doc = document.getElementById('userAudio' + index);
    document.getElementById('userPlayIcon' + index).style.display = 'inline-block';
    document.getElementById('userStopIcon' + index).style.display = 'none';
    document.getElementById('panelPause').style.display = 'none';
    document.getElementById('panelPlay').style.display = 'inline-block';

    doc.pause();
  };

  componentDidMount() {
    this.props.dispatch({type: 'LOAD_LIST'});
  }

  render() {
    return (
      <div className="music-panel">
        <div className="music-panel__header">
          <span className="header-text">User songs</span>
        </div>
        <div className="panels">
          <div className="panels-left">
            <h2>Track info here</h2>
          </div>

          <div className="panels-right">
            {
              this.props.defaultSongs.map((item, i) => {
                return(
                  <React.Fragment>
                    <div className="audio">
                        <span className="player-button">
                          <img id={'userPlayIcon' + (i + 1)} className="player-icon"
                               onClick={(e) => this.startPlay(i + 1, this.props.defaultSongs.length, e)}
                               src={require('../../images/iconfinder_icon-play_211876.png')}
                               alt=""/>
                        </span>
                      <span className="player-button">
                          <img id={'userStopIcon' + (i + 1)} className="player-icon-stop"
                               onClick={(e) => this.stopPlay(i + 1, e)}
                               src={require('../../images/iconfinder_icon-ios7-pause_211791.png')}
                               alt=""/>
                        </span>

                      <div className="audio-artist-title">
                        <h3 className="title">{item.artist.artist}</h3>
                        <h3 className="title">{item.title}</h3>
                      </div>
                    </div>

                    <audio id={'userAudio' + (i + 1)} src={item.url}></audio>
                  </React.Fragment>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
