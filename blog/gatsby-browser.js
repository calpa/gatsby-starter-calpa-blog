import React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faZhihu,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import createStore from './src/state/createStore';

import { url, gaTrackId, gaOptimizeId } from './data/config';

library.add(
  faCircle,
  faComment,
  faChevronUp,
  faEnvelope,
  faGithub,
  faZhihu,
  faFacebookF,
);

const isLocalDevelopment = () =>
  window && window.location && window.location.origin !== url;

if (isLocalDevelopment() === false) {
  ReactGA.initialize(gaTrackId);

  // Google Optimizer
  if (gaOptimizeId) {
    ReactGA.ga('require', gaOptimizeId);
  }
  console.log('Welcome to online environment.');
}

// Inspired by APlayer
console.log(
  `${'\n'} %c CALPA %c https://calpa.me ${'\n'}${'\n'}`,
  'color: #6cf; background: #030307; padding:5px 0;',
  'background: #6cf; padding:5px 0;',
);

export const wrapRootElement = ({ element }) => {
  const store = createStore();

  const ConnectedRootElement = <Provider store={store}>{element}</Provider>;

  return ConnectedRootElement;
};

export const onRouteUpdate = (state) => {
  if (isLocalDevelopment() !== true) {
    ReactGA.pageview(state.location.pathname);
  }
};
