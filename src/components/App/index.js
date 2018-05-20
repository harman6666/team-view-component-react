/* App initialize here */
import React from 'react';
import MainPage from '../Main';

export default class App extends React.Component {
  render() {
    return ( 
      <div id="app" className="team-view-app wrapper">
        <MainPage />
      </div>
    );
  }
};
