import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment col-md-12">
        <h2 className="comment-author">{this.props.author}</h2>
        {this.props.children}
      </div>
    )
  }
}

Comment.defaultProps = {};

export default Comment;
