require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Nav from './Nav';
import CommentBoxWrapper from './CommentBoxWrapper';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route name="app" path="/" component={Nav}>
          {/* add the routes here */}
          <IndexRoute component={CommentBoxWrapper}></IndexRoute>
        </Route>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
