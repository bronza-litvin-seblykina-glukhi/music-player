import React from 'react';
import songslist from "../../redux/modules/songslist";
import songs from '../../redux/modules/songs';

export default class DefaultSongsList extends React.Component {

  timeLine(track, timeline, playhead) {
    const duration = track.duration;
    const timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

    function updateTime() {
      const playTime = timelineWidth * (track.currentTime / duration);
      return playhead.style.width = playTime + 'px';
    }

    track.addEventListener('timeupdate', updateTime, false);
  }

  startPlay(index, countOfSons) {
    const { songId } = this.props;
    this.props.dispatch({ type: 'SET_PLAY_TRACK_INFO', i: index, songs: countOfSons, songPrivacy: 'default' });

    if (songId && songId !== index) {
      const oldAudio = `audio${songId}`;
      const oldPlayIcon = `playIcon${songId}`;
      const oldStopIcon = `stopIcon${songId}`;

      document.getElementById(oldAudio).pause();
      document.getElementById(oldStopIcon).style.display = 'none';
      document.getElementById(oldPlayIcon).style.display = 'inline-block';
    }

    const track = document.getElementById('audio' + index);
    const timeline = document.getElementById('timeline');
    const playhead = document.getElementById('playhead');

    document.getElementById('playIcon' + index).style.display = 'none';
    document.getElementById('stopIcon' + index).style.display = 'inline-block';
    document.getElementById('panelPlay').style.display = 'none';
    document.getElementById('panelPause').style.display = 'inline-block';

    track.play();
    this.timeLine(track, timeline, playhead);


    track.addEventListener('ended', () => {
      track.currentTime = 0;
      this.stopPlay(index);
    });

    return null;
  };

  stopPlay (index) {
      const track = document.getElementById('audio' + index);
      document.getElementById('playIcon' + index).style.display = 'inline-block';
      document.getElementById('stopIcon' + index).style.display = 'none';
      document.getElementById('panelPause').style.display = 'none';
      document.getElementById('panelPlay').style.display = 'inline-block';

      track.pause();
    };

  playNext(index) {
    const { songsCount } = this.props;

    if(index === songsCount) {
      return this.stopPlay(index);
    }
    else {
      return this.startPlay(index + 1, songsCount);
    }
  };

    componentDidMount() {
        this.props.dispatch({type: 'LOAD_LIST'});
    }

    render() {
      return (
        <div className="music-panel">
          <div className="music-panel__header">
            <span className="header-text">Default songs</span>
          </div>
          <div className="panels">
            <div className="panels-left">
              <div className="track-info">
                <img className="track-info__image" src={require('../../images/image-sample.png')} alt="" />
              </div>

              <div id="timeline" className="timeline">
                <div id="playhead" className="playhead"></div>
              </div>
            </div>

            <div className="panels-right">
              {
                this.props.defaultSongs.map((item, i) => {
                  return(
                    <React.Fragment>
                      <div className="audio">
                        <span className="player-button">
                          <img id={'playIcon' + (i + 1)} className="player-icon"
                               onClick={(e) => this.startPlay(i + 1, this.props.defaultSongs.length, e)}
                               src={require('../../images/iconfinder-playlist-play-icon_5172493.png')}
                               alt=""/>
                        </span>
                        <span className="player-button">
                          <img id={'stopIcon' + (i + 1)} className="player-icon-stop"
                               onClick={(e) => this.stopPlay(i + 1, e)}
                               src={require('../../images/iconfinder-playlist-pause-icon_2270301.png')}
                               alt=""/>
                        </span>

                        <div className="audio-artist-title">
                          <h3 className="title">{item.artist.artist}</h3>
                          <h3 className="title">{item.title}</h3>
                        </div>
                      </div>

                      <audio id={'audio' + (i + 1)} src={item.url}></audio>
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
