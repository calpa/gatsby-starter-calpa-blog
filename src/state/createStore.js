import { createStore } from 'redux';
import reducer from '../reducers';

// For Redux DevTools
/* eslint-disable no-underscore-dangle */
const store = () => createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
