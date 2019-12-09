import React from 'react';
import {
  TrackTimeLine,
  ChangePlayTime,
  GetTrackTime
} from './TimeLine';

export default class DefaultSongsList extends React.Component {
  playStart = '0:00';
  trackDuration = '0:00';

  getCurrentPlayTime() {
    const { songId } = this.props;

    if (!songId) {
      return '0:00';
    }

    const track = document.getElementById('audio' + songId);
    track.addEventListener('timeupdate', () => {
      const { currentTime } = track;

      const seconds = (Math.round(currentTime) % 60)
        .toString().length === 1 ?
        '0' + (Math.round(currentTime) % 60)
        : (Math.round(currentTime) % 60);

      this.playStart = `${Math.floor(Math.round(currentTime) / 60)}:${seconds}`;
    }, false);
  }

  startPlay(index, countOfSons, trackInfo) {
    const { title, artist, albumName, genre } = trackInfo;
    const { songId } = this.props;
    const timeline = document.getElementById('timeline');
    this.props.dispatch({
      type: 'SET_PLAY_TRACK_INFO',
      i: index,
      songs: countOfSons,
      songPrivacy: 'default',
      title: title,
      artist: artist.artist,
      genre: genre,
      album: albumName
    });

    if (songId && songId !== index) {
      const oldAudio = `audio${songId}`;
      const oldPlayIcon = `playIcon${songId}`;
      const oldStopIcon = `stopIcon${songId}`;

      document.getElementById(oldAudio).pause();
      document.getElementById(oldStopIcon).style.display = 'none';
      document.getElementById(oldPlayIcon).style.display = 'inline-block';
    }

    const track = document.getElementById('audio' + index);

    document.getElementById('playIcon' + index).style.display = 'none';
    document.getElementById('stopIcon' + index).style.display = 'inline-block';
    document.getElementById('panelPlay').style.display = 'none';
    document.getElementById('panelPause').style.display = 'inline-block';

    track.play();
    this.trackDuration = GetTrackTime(track);
    this.getCurrentPlayTime(track);

    TrackTimeLine(track);

    timeline.addEventListener('click', (event) => {
      ChangePlayTime(this.props, event)
    }, false);

    track.addEventListener('ended', () => {
      track.currentTime = 0;
      this.stopPlay(index);
    });
  };

  stopPlay(index) {
      const track = document.getElementById('audio' + index);

      document.getElementById('playIcon' + index).style.display = 'inline-block';
      document.getElementById('stopIcon' + index).style.display = 'none';
      document.getElementById('panelPause').style.display = 'none';
      document.getElementById('panelPlay').style.display = 'inline-block';

      track.pause();
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

              <div className="track-info__name">
                <span className="track__name">{ this.props.title || 'No track selected' }</span>
                <span className="track__artist">{ this.props.artist || 'No track selected' }</span>
              </div>

              <div id="timeline" className="timeline">
                <div id="playhead" className="playhead"></div>
              </div>

              <div className="track-info__duration">
                <span className="track__start">{ this.playStart }</span>
                <span className="track__end">{ this.trackDuration }</span>
              </div>

              <div className="track-info__album-genre">
                <span className="track__album">Album:
                  <span className="track__album-value">{ this.props.album || 'No track selected' }</span>
                </span>
                <span className="track__genre">Genres:
                  <span className="track__genre-value">{ this.props.genre || 'No track selected' }</span>
                </span>
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
                               onClick={
                                 () => this.startPlay(
                                 i + 1,
                                 this.props.defaultSongs.length,
                                 item
                               )}
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
