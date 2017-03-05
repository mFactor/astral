import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/app.jsx';

const routes = (
  <Route name='app' component={App} path='/'>
  </Route>
);

export default routes;
