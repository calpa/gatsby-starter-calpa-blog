/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga';
import { config } from './data';

import installFontAwesome from './src/api/installFontAwesome';

import 'prismjs/themes/prism-solarizedlight.css';

const {
  url, gaTrackId, gaOptimizeId,
} = config;

installFontAwesome();

const isLocalDevelopment = () => window && window.location && window.location.origin !== url;

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

export const onRouteUpdate = (state) => {
  if (isLocalDevelopment() !== true) {
    ReactGA.pageview(state.location.pathname);
  } else {
    console.log('isLocalDevelopment is true, so ReactGA is not activated');
  }
};
