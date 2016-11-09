require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Nav from './Nav';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route name="app" path="/" component={Nav}>
          {/* add the routes here */}
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
