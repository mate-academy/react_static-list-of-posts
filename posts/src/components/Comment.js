import React, {Component} from 'react';
import {comments} from '../comments';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.comment = comments.find(comment => comment.id === this.props.id);
  }

  render() {

      return (
        <div>
          <h4>{this.comment.title}</h4>
          <h6>{this.comment.body}</h6>
        </div>
      );
  }
}

export default Comment;
