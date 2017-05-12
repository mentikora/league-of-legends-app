import React, { Component } from 'react';
import Header from './header';
import ProfileSearch from './profile-search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileSearch />

      </div>
    );
  }
}

export default App;
