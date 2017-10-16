import ReactGA from 'react-ga';

ReactGA.initialize('UA-84737574-3', {
  debug: false,
});

exports.onRouteUpdate = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
