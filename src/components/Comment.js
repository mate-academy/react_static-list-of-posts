import React from 'react';

const Comment = props => (
  <div className="comment">
    <p>{props.comment.body}</p>
    <span>{props.comment.name}</span>
    <span>{props.comment.email}</span>
  </div>
);

export default Comment;
