import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
// import { AppContainer } from 'react-hot-loader';
// import { createStore } from 'redux';
// import reducers from './reducers.jsx';
import routes from './routes';
import IsoStyle from './base/components/iso_style';
/*
import promiseMiddleware from 'lib/promiseMiddleware';
import immutifyState from 'lib/immutifyState';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
*/
// yes
/*
const initialState = immutifyState(window.__INITIAL_STATE__);
const reducer = combineReducers(reducers);
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer,
                                                              initialState);
 */
// const store = createStore(reducers);

/*
const moduleLoad = (Component) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <RouteComp />
      </Provider>
    </AppContainer>,
    document.getElementById('app-entry')
  );
};
 */

const moduleLoad = (routes) => {
  render(
    <IsoStyle onInsertCss={styles => styles._insertCss()}>
      <Router routes={routes} history={browserHistory} />
    </IsoStyle>,
    document.getElementById('app-entry')
  );
};

moduleLoad(routes);

/*
render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app-entry')
);
*/

// Hot Module Replacement API

if (module.hot) {
  console.log("Hot module reloading...");
  module.hot.accept();
}
