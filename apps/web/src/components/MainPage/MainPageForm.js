import React, { Component } from 'react';

export default class MainPageForm extends Component {

  render() {
    return(
      <div className="menu" id="panel">
        <div className="round-external">
            <span className="icon">
              <img src="../../images/iconfinder_icon-shuffle_211887.png" className="img-shadow" alt="/" />
            </span>

          <span className="icon">
              <img src="../../images/iconfinder_icon-ios7-skipforward_211822.png" className="img-shadow" alt="/" />
            </span>


          <span className="icon">
              <img id="panelPlay" src="../../images/iconfinder_icon-play_211876.png" className="img-shadow" alt="" />
            </span>

          <span className="icon">
              <img src="../../images/iconfinder_icon-ios7-skipbackward_211820.png" className="img-shadow" alt="" />
            </span>

          <span className="icon">
              <img src="../../images/iconfinder_icon-loop_211856.png" className="img-shadow" alt="" />
            </span>
          <div className="round-internal"></div>
        </div>
      </div>
    )
  }

}
