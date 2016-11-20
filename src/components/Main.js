require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

import UserRoutes from '../containers/UserRoutes';

class AppComponent extends React.Component {

  render() {
    return (
      <UserRoutes/>
    );
  }

}

AppComponent.defaultProps = {};

export default AppComponent;
