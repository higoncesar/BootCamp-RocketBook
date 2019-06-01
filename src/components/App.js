import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

export default class App extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Header />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Fragment>
    );
  }
}
