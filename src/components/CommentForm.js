import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) return;
    this.props.onCommentSubmit({'author': author, 'text': text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="comment-form row col-md-4" onSubmit={this.handleSubmit}>
        <div className="row col-md-12">
          <input className="col-md-12" type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange} />
        </div>
        <div className="row col-md-12">
          <textarea className="col-md-12" rows="4" cols="50" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange} />
        </div>
        <div className="row col-md-3 col-md-offset-9">
          <input className="col-md-12" type="submit" value="Send" />
        </div>
      </form>
    )
  }
}

CommentForm.defaultProps = {};

export default CommentForm;
