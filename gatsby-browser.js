import ReactGA from 'react-ga';

const { ga_track_id } = require('./data/config');

ReactGA.initialize(ga_track_id);

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname);
};
