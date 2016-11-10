require('styles/Login.scss');

import React from 'react';
import { withRouter } from 'react-router';
import request from 'superagent';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Username" value={this.state.user} onChange={this.handleUserChange} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state.user.trim();
    let password = this.state.password.trim();
    if (!user || !password) return;
    request.post('http://localhost:3000/v2/authentication/login')
    .send({ user: user, password: password })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, res) => {
      if (!err) {
        window.sessionStorage.token = res.body.data;
        this.props.router.push('/');
      }
    })
  }

  handleUserChange(e) {
    this.setState({user: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
}

export default withRouter(Login);
