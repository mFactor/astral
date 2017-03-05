import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';

export default class Root extends Component {
  constructor(props) {
    super(props);
    let x = null;
    console.log('test');
  }

  render() {
    return (
      <Router history={browserHistory}>
        {routes}
      </Router>
    );
  }
}
