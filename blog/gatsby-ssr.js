import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import createStore from './src/state/createStore';

const replaceRenderer = () => ({ bodyComponent, replaceBodyHTMLString }) => {
  const store = createStore();

  const ConnectedBody = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};

export default replaceRenderer;
