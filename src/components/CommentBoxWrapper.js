import React from 'react';
import CommentBox from './CommentBox';

class CommentBoxWrapper extends React.Component {
  render() {
    return (
      <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />
    )
  }
}

CommentBoxWrapper.defaultProps = {
};

export default CommentBoxWrapper;
