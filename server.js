/**
 * Entry point for Node.
 * TODO: Remove hard references in rootTemplate, prep for production
 */
import express from 'express';
import React from 'react';
import { join } from 'path';
import { renderToString } from 'react-dom/server'
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import globalRoutes from './src/routes.jsx';
import globalReducers from './src/reducers.jsx';
import client from './webpack.config.js';
import IsoStyle from './src/base/components/iso_style.jsx';
import config from './config/proc.js';

const app = express();
app.use(express.static(join(__dirname, 'static')));

app.use((req, res) => {
  const history = createMemoryHistory(req.path);
  const routerParams = {
    history,
    routes: globalRoutes,
    location: req.url
  };
  const css = [];
  const storeState = {};
  const store = createStore(globalReducers, storeState);

  // React route matching, server side rendering
  match(routerParams, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found');
    function renderView() {
      const rootView = React.createElement(RouterContext, renderProps, null);
      const rootStyle = React.createElement(IsoStyle, {
        onInsertCss: (styles) => { css.push(styles._getCss()) }
      }, rootView);
      const rootRedux = React.createElement(Provider, { store }, rootStyle);
      const rootComponent = renderToString(rootStyle);
      const rootState = JSON.stringify(store.getState());
      const template = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Astral | Demo</title>
          <script>
            window.__ROOT_STATE__ = ${rootState};
          </script>
          <style>${css.join('')}</style>
        </head>
        <body>
          <div id="app-entry">${rootComponent}</div>
          <script src="http://localhost:3001/render.bundle.js"></script>
        </body>
      </html>
      `;
      return template;
    }
    res.send(renderView());
  });
});

const PORT = process.env.PORT || 3000;
const httpServer = app.listen(PORT, () => {
  console.log('Server listening on: ' + PORT);
});

export { httpServer };
