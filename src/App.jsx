import React, { Component } from 'react';
import './App.scss';
import UserInformation from './UserInformation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  getUserInformation() {
    /*
      TODO: fetch a user from the GitHub API

      TIPS:
       1) The Fetch API provides an interface for
         fetching resources (including across the network).
       2) Maybe you want to update the state here.
    */
    const self = this;
    const { name } = this.state.user;
    return { name, self };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Test</h2>
        </div>
        <div className="App-intro">
          <p>Click on the button to fetch the user information</p>
          <button type="button" className="btn btn-primary" onClick={this.getUserInformation()}>
            Click me
          </button>
        </div>
        <UserInformation />
      </div>
    );
  }
}

export default App;
