import path from 'path';
import fs from 'fs';
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import reactRoutes from './src/routes.jsx';
import client from './webpack.config.js';

const compiler = webpack(client);
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
  }
}));

app.use(webpackHotMiddleware(compiler));


app.use((req, res) => {
  const routerParams = {
    routes: reactRoutes,
    location: req.url
  };
  // const reducer = combineReducers(reducers);
  // const store = applyMiddleware(promiseMiddleware)(createStore)(reducer);
  // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  // console.log(assetsByChunkName);
  console.log(req.originalUrl);
  match(routerParams, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found');
    console.log('test');
    function renderView() {
      /*
      const InitialView = (
        React.createElement(Provider, { },
                            React.createElement(RouterContext, props, null)));
      */
      const baseView = React.createElement(RouterContext, renderProps, null);
      /*
      const InitialView = (
        <Provider>
         <RoutingContext {...renderProps} />
        </Provider>
      );
       */
      const baseComponent = renderToString(baseView);
      //const initialState = store.getState();
      const initiaLState = null;
      const baseTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Redux Demo</title>

          <script>
            window.__INITIAL_STATE__ = 1;
          </script>
        </head>
        <body>
          <div id="app-entry">${baseComponent}</div>
          <script type="application/javascript" src="render.bundle.js">
          </script>
        </body>
      </html>
      `;
      return baseTemplate;
    }
    res.end(renderView());
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server listening on: ' + PORT);
});
