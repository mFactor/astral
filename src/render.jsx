import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import routes from './routes';
import globalReducers from './reducers';
import IsoStyle from './base/components/iso_style';

const moduleLoad = (routes) => {
  const rootState = window.__ROOT_STATE__;
  const store = createStore(globalReducers, rootState);
  render(
    <Provider store={store}>
      <IsoStyle onInsertCss={styles => styles._insertCss()}>
        <Router routes={routes} history={browserHistory} />
      </IsoStyle>
    </Provider>,
    document.getElementById('app-entry')
  );
};

moduleLoad(routes);

// Hot Module Replacement API
if (module.hot) {
  console.log("Hot module reloading...");
  module.hot.accept();
}
