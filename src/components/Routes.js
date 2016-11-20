require('normalize.css/normalize.css');
require('styles/App.scss');

import React, { PropTypes } from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Nav from './Nav';
import Dashboard from './DashboardComponent';
import Login from './LoginComponent';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route name="login" path="/login" component={Login} onEnter={this.logout}></Route>
        {/* hot fix for hook.length == 0 */}
        <Route name="app" path="/" component={(props) => (<Nav {...props} user={this.props.user} />)} onEnter={(nextState, replace, cb) => this.requireAuth(nextState, replace, cb)}>
          {/* add the routes here */}
          <IndexRoute component={(props) => (<Dashboard {...props} user={this.props.user} />)}></IndexRoute>
        </Route>
      </Router>
    );
  }

  logout(nextState) {
    delete window.sessionStorage.token;
  }

  requireAuth(nextState, replace, cb) {
    let token = window.sessionStorage.token;
    if (!token) {
      replace('/login');
      cb();
      return;
    }
    this.props.fetchUser(token, user => {
      this.props.setUser(user);
      cb();
    }, err => {
      console.log(err);
      replace('/login');
      cb();
    });
  }
}

AppComponent.defaultProps = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired
};

export default AppComponent;
