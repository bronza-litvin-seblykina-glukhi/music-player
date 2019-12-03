import React from 'react';
import './MainPage.scss';
import MainPageForm from './MainPageForm';

export default class MainPage extends React.Component {
  render() {
    return(
      <div className="body">
        <MainPageForm/>
      </div>
    )
  }
}
