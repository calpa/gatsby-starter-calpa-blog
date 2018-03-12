import React from 'react';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import fundebug from 'fundebug-javascript';

import createStore from './src/state/createStore';

const { ga_track_id } = require('./data/config');

ReactGA.initialize(ga_track_id);

// Inspired by APlayer
console.log(`${'\n'} %c CALPA %c https://calpa.me ${'\n'}${'\n'}`, 'color: #6cf; background: #030307; padding:5px 0;', 'background: #6cf; padding:5px 0;');

// Fundebug
fundebug.apikey = '0d1f35b6963e5da559ca7025c5d9dae9e82630d98225621b20d73e87f30f25f9';

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
