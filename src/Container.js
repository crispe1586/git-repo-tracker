import React, { Component } from 'react';
import './App.scss';
import Form from './Form';
import List from './List';

class Container extends Component {

  render() {
    const { fetchRepos, updateUsername, repos, username } = this.props

    return (
      <div className="App">
        <Form username={ username } fetchRepos={ fetchRepos } updateUsername={ updateUsername } />
        <List username={ username } repos={ repos } />
    </div>
  );
  }
}

export default Container;
