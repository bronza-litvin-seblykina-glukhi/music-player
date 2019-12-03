import React from 'react';

export default class MusicList extends React.Component {

    componentDidMount() {
        this.props.dispatch({type: 'LOAD_LIST'})
    }

    render() {

        return (
            <div className="music-panel">
                <div className="panels">
                    <div className="panels-left">
                        <h2>Track info here</h2>
                    </div>

                    <div className="panels-right">
                        <div className="audio">
                            <span className="player-button">
                            <img className="player-icon" src={require('../../images/iconfinder_icon-play_211876.png')}
                                 alt=""/>
                            </span>
                            <div className="audio-artist-title">
                                <h3>{this.props.auth.getIn(['defaultSongs'])}</h3>
                                <h3>{this.props.auth.getIn(['userSongs'])}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
