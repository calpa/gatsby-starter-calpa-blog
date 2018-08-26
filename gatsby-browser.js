import React from 'react';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import createStore from './src/state/createStore';

const { ga_track_id } = require('./data/config');

const isLocalDevelopment = () => window && window.location.hostname;

if (isLocalDevelopment() === false) {
  ReactGA.initialize(ga_track_id);
  ReactGA.ga('require', 'GTM-WHP7SC5');
}

// Inspired by APlayer
console.log(`${'\n'} %c CALPA %c https://calpa.me ${'\n'}${'\n'}`, 'color: #6cf; background: #030307; padding:5px 0;', 'background: #6cf; padding:5px 0;');

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

if (isLocalDevelopment !== true) {
  exports.onRouteUpdate = (state) => {
    ReactGA.pageview(state.location.pathname);
  };
}
