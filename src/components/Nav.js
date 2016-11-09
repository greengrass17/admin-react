import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className="main row">
        <div>
          <h2>Comment Box</h2>

          <ul className="col-md-2">
            <li><Link to="/">Comment Box</Link></li>
          </ul>
        </div>

        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Nav.defaultProps = {
};


export default Nav;
