require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import request from 'superagent';

import Nav from './Nav';
import CommentBox from './CommentBox';
import Login from './LoginComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.getCommentBox = this.getCommentBox.bind(this);
    this.getNav = this.getNav.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route name="login" path="/login" component={Login} onEnter={this.logout}></Route>
        {/* hot fix for hook.length == 0 */}
        <Route name="app" path="/" getComponent={this.getNav} onEnter={(nextState, replace, cb) => this.requireAuth(nextState, replace, cb)}>
          {/* add the routes here */}
          <IndexRoute getComponent={this.getCommentBox}></IndexRoute>
        </Route>
      </Router>
    );
  }

  getCommentBox(nextState, callback) {
    callback(null, props => <CommentBox {...props} user={this.state.user} url="http://localhost:3000/comments" pollInterval={2000} />);
  }

  getNav(nextState, callback) {
    callback(null, props => <Nav {...props} user={this.state.user} />);
  }

  logout(nextState, replace) {
    delete window.sessionStorage.token;
  }

  requireAuth(nextState, replace, cb) {
    let token = window.sessionStorage.token;
    if (!token) {
      replace('/login');
      cb();
      return;
    }
    request.get('http://localhost:3000/v2/users')
    .set('auth-token', token)
    .end((err, res) => {
      if (err) {
        console.log(err);
        replace('/login');
        cb();
      } else {
        this.setState({ user: res.body.data[0]});
        cb();
      }
    })
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
