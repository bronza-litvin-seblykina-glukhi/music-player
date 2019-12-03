import React, { Component } from 'react';

export default class MusicList extends Component {
  getMusic = async () => {
    await fetch('http://localhost:3001/api/audio/songs', {
      headers: {'Content-Type': 'application/json'},
      method: 'get',
      params: { userToken: '' }
    })
      .then(response => {
        if(response.ok) {
          return response;
        }
      })
      .catch((e) => {
        console.log(e);
      })
  };

  render() {
    return(
      <div className="music-panel">
        <div className="panels">
          <div className="panels-left">
            <h2>Track info here</h2>
          </div>

          <div className="panels-right">
            <div className="audio">
              <span className="player-button">
                <img className="player-icon" src={require('../../images/iconfinder_icon-play_211876.png')} alt=""/>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
