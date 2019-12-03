import React, { Component } from 'react';
import './MainPage.scss';
import Panel from './Panel';
import MusicList from './MusicList';

export default class MainPage extends Component {
  render() {
    return(
      <div className="body">
        <Panel/>
        <MusicList/>
      </div>
    )
  }
}
