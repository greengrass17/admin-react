'use strict';

import React from 'react';
import request from 'superagent';

require('styles/Dashboard.scss');

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  }

  render() {
    let groupNodes = this.state.groups.map(group => {
      return (
        <p key={group.PartitionKey}>{group.PartitionKey}</p>
      )
    })
    return (
      <div className="dashboard-component">
        <h1>Dashboard</h1>
        {groupNodes}
      </div>
    );
  }

  componentDidMount() {
    this.getGroups();
  }

  getGroups() {
    const token = window.sessionStorage.token;
    request.get('http://localhost:3000/v2/dashboard/get_groups')
    .set('auth-token', token)
    .end((err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(res.body.data);
      this.setState({ groups: res.body.data });
    })
  }
}

Dashboard.displayName = 'Dashboard';

// Uncomment properties you need
// Dashboard.propTypes = {};
// Dashboard.defaultProps = {};

export default Dashboard;
