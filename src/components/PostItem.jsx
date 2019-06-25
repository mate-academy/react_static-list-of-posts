import React from 'react';
import Comment from './Comment';
import User from './User'

export default function TodoItem(props) {
  const { post, user, comments } = props;
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <User info={user} />
      <div className="comments">
        {comments.map(item => <Comment item={item} />)}
      </div>
    </div>
  );
}
