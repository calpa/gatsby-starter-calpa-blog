import React from 'react';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

const { ga_track_id } = require('./data/config');

ReactGA.initialize(ga_track_id);

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore();

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./src/reducers', () => {
      const nextRootReducer = require('./src/reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname);
  // Fix AddThis refresh problem in SPA
  // if (window.addthis) {
  //   window.addthis.layers.refresh();
  // }
};
