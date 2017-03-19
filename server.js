/**
 * Entry point for Node.
 * TODO: Remove hard references in rootTemplate, prep for production
 */
import express from 'express';
import React from 'react';
import { join } from 'path';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { sysLog } from './src/lib/log';
import routes from './src/routes.jsx';
import rootReducers from './src/reducers.jsx';
import IsoStyle from './src/base/components/iso_style.jsx';
import * as middleware from './src/middleware';
import * as controller from './src/controller';

const env = process.env;
const app = express();
app.use(express.static(join(__dirname, 'static')));

/**
 * Service initialization
 * Note: Use Promise Async/Await pattern to ensure all services
 *       are initialized before proceeding
 */

/**
 * Middleware registration
 */
middleware.base(app);

/**
 * API routing
 */
controller.base(app);

/**
 * Isomorphic react routing
 */
app.use((req, res) => {
  const history = createMemoryHistory(req.path);
  const routerParams = {
    history,
    routes,
    location: req.url,
  };
  const css = [];
  const storeState = {};
  const store = createStore(rootReducers, storeState);

  // React route matching, server side rendering
  match(routerParams, (err, redirectLocation, renderProps) => {
    if (err) {
      // sysLog.error(err);
      if (env.NODE_ENV === 'development') {
        throw new Error('Internal server error');
      }
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found');

    function renderView() {
      const rootView = React.createElement(RouterContext, renderProps, null);
      const rootStyle = React.createElement(IsoStyle, {
        onInsertCss: (styles) => { css.push(styles._getCss()); },
      }, rootView);
      const rootRedux = React.createElement(Provider, { store }, rootStyle);
      const rootComponent = renderToString(rootRedux);
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

const httpServer = app.listen(env.PORT, () => {
  sysLog.info(`Astral server listening on ${env.PORT}`);
});

export { httpServer };
