'use strict';

import React, { PropTypes } from 'react';

require('styles/GroupList.scss');

class GroupListComponent extends React.Component {
  render() {
    let groupNodes = this.props.groups.map(group => {
      return (
        <p key={group.PartitionKey}>{group.PartitionKey}</p>
      )
    })
    return (
      <div className="grouplist-component">
        {groupNodes}
      </div>
    );
  }
}

// Uncomment properties you need
// GroupListComponent.propTypes = {};
GroupListComponent.defaultProps = {
  groups: PropTypes.array
};

export default GroupListComponent;
