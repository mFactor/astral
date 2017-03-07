import path from 'path';
import fs from 'fs';
import webpack from 'webpack'
//import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match, createMemoryHistory } from 'react-router';
import reactRoutes from './src/routes.jsx';
import client from './webpack.config.js';
import IsoStyle from './src/base/components/iso_style.jsx';

// const compiler = webpack(client);
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

/*
app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
  hot: true,
  stats: {
    colors: true,
  }
}));

app.use(webpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));
*/

app.use((req, res) => {
  const history = createMemoryHistory(req.path);
  const routerParams = {
    history,
    routes: reactRoutes,
    location: req.url
  };
  const css = [];
  /*
  const reducer = combineReducers(reducers);
  const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
  let assetChunks = res.locals.webpackStats.toJson().assetsByChunkName.main;
  if (assetChunks.constructor !== Array) {
    assetChunks = Array.of(assetChunks);
  }
  assetChunks = assetChunks.filter(path => path.endsWith('.js'))
                           .map(path => `<script type="application/javascript" src="${path}"></script>`);
  console.log(assetChunks);
   */
  // const assetChunks = res.locals.webpackStats.toJson().assetsByChunkName.main;
  match(routerParams, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found');

    function renderView() {
      /*
      const InitialView = (
        React.createElement(Provider, { },
                            React.createElement(RouterContext, props, null)));
      */
      const rootView = React.createElement(RouterContext, renderProps, null);
      const rootStyle = React.createElement(IsoStyle, {
        onInsertCss: (styles) => { css.push(styles._getCss()) }
      }, rootView);
      // console.log(assetsByChunkName);
      // console.log(renderProps);
      /*
      const InitialView = (
        <Provider>
         <RoutingContext {...renderProps} />
        </Provider>
      );
       */
      const rootComponent = renderToString(rootStyle);
      //const initialState = store.getState();
      const initiaLState = null;
      const rootTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Astral | Demo</title>
          <script>
            window.__INITIAL_STATE__ = 1;
          </script>
          <style>${css.join('')}</style>
        </head>
        <body>
          <div id="app-entry">${rootComponent}</div>
          <script src="http://localhost:3001/render.bundle.js"></script>
        </body>
      </html>
      `;
      return rootTemplate;
    }
    res.send(renderView());
  });
});

const PORT = process.env.PORT || 3000;
const httpServer = app.listen(PORT, () => {
  console.log('Server listening on: ' + PORT);
});

export { httpServer };
