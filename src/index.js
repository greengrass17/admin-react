import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mercuryApp from './reducers';
import App from './components/Main';

// Render the main component into the dom
render(
  <Provider store={createStore(mercuryApp)}>
    <App />
  </Provider>
  , document.getElementById('app')
);
