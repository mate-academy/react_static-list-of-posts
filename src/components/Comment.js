import React from 'react';

function Comment(props) {
  return (
    <div className="post-comment">
      <h5>{props.comment.name}</h5>
      <p className="post-comment-email">{props.comment.email}</p>
      <p className="post-comment-text">{props.comment.body}</p>
    </div>
  );
}

export default Comment;
