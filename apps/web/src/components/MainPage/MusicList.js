import React, { Component } from 'react';

export default class MusicList extends Component {
  async getSongsData() {
    const response =
      await fetch("http://localhost:3001/api/audio/songs",
        {
          headers: {'Content-Type': 'application/json'},
          params: { userToken: '' }
        }
      );
    return await response.json();
  }

  render() {
    const music = this.getSongsData()
      .then(res => {
        return res;
      });

    console.log(music);

    return(
      <div className="music-panel">
        <div className="panels">
          <div className="panels-left">
            <h2>Track info here</h2>
          </div>

          <div className="panels-right">
            {
              music.defaultSongs.map(item => {
                return(
                  <React.Fragment>
                    <div className="audio">
                      <span className="player-button">
                        <img className="player-icon" src={require('../../images/iconfinder_icon-play_211876.png')} alt=""/>
                      </span>

                      <div className="audio-artist-title">
                        <h3>{ item.artist.artist }</h3>
                        <h3>{ item.title }</h3>
                      </div>
                    </div>
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
