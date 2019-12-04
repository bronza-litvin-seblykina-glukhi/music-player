import React from 'react';

export default class MusicList extends React.Component {

    startPlay = (index, songsCount) => {
      this.props.dispatch({ type: 'SET_PLAY_TRACK_INFO', i: index, songs: songsCount });

      const doc = document.getElementById('audio' + index);
      document.getElementById('playIcon' + index).style.display = 'none';
      document.getElementById('stopIcon' + index).style.display = 'inline-block';

      doc.play();
      doc.addEventListener('ended', () => {
        doc.currentTime = 0;
        this.stopPlay(index);
      })
    };

    stopPlay = (index) => {
      const doc = document.getElementById('audio' + index);
      document.getElementById('playIcon' + index).style.display = 'inline-block';
      document.getElementById('stopIcon' + index).style.display = 'none';

      doc.pause();
    };

    componentDidMount() {
        this.props.dispatch({type: 'LOAD_LIST'})
    }

    render() {
      console.log(this.props);

      let arr = [];
      const defaultSongs = this.props.songslist;

      if(!!defaultSongs) {
        defaultSongs.map(el => {
          arr.push(el);
        });
      }

      return (
          <div className="music-panel">
            <div className="panels">
              <div className="panels-left">
                <h2>Track info here</h2>
              </div>

              <div className="panels-right">
                {
                  arr.map((item, i) => {
                    return(
                      <React.Fragment>
                        <div className="audio">
                          <span className="player-button">
                            <img id={'playIcon' + i} className="player-icon"
                                 onClick={(e) => this.startPlay(i, arr.length, e)}
                                 src={require('../../images/iconfinder_icon-play_211876.png')}
                                 alt=""/>
                          </span>
                          <span className="player-button">
                            <img id={'stopIcon' + i} className="player-icon-stop"
                                 onClick={(e) => this.stopPlay(i, e)}
                                 src={require('../../images/iconfinder_icon-ios7-pause_211791.png')}
                                 alt=""/>
                          </span>

                          <div className="audio-artist-title">
                            <h3 className="title">{item.artist.artist}</h3>
                            <h3 className="title">{item.title}</h3>
                          </div>
                        </div>

                        <audio id={'audio' + i} src={item.url}></audio>
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
