/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga';
import { config } from './data';

import installFontAwesome from './src/api/installFontAwesome';

const {
  url, gaTrackId, gaOptimizeId, transitionDelay = 100,
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

// Transition (2018-12-29)
export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
}) => {
  if (
    prevRouterProps
    && prevRouterProps.location.pathname === location.pathname
  ) {
    if (window) {
      // eslint-disable-next-line global-require
      const SmoothScroll = require('smooth-scroll');
      const header = document.getElementById('header');
      const scroll = new SmoothScroll('#header', { offset: 60 });
      if (header) {
        setTimeout(() => scroll.animateScroll(header), transitionDelay);
      }
    }
    return false;
  }

  if (location.action === 'PUSH') {
    if (window) {
      setTimeout(() => window.scrollTo(0, 0), transitionDelay);
    }
  }
  return false;
};
