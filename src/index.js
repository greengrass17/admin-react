import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import mercuryApp from './reducers';
import App from './components/Main';

// Render the main component into the dom
render(
  <Provider store={createStore(
    mercuryApp,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )}>
    <App />
  </Provider>
  , document.getElementById('app')
);
