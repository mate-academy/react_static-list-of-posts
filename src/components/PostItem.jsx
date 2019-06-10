import React, { Component } from 'react';
import Comment from './Comment';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post, user, comments } = this.props;
    return (
      <div className="post-item">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {user}
        <div className="comments">
          {comments.map(item => <Comment item={item} />)}
        </div>
      </div>
    );
  }
}
