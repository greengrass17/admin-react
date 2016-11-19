require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import Routes from './Routes';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
    this.setUser = this.setUser.bind(this);
  }

  render() {
    return (
      <Routes user={this.state.user} setUser={this.setUser} />
    );
  }

  setUser(user) {
    this.setState({ user: user })
  }

}

AppComponent.defaultProps = {};

export default AppComponent;
