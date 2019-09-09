import React from 'react';
import './Comment.css';

function Comment({ comment }) {
  return (
    <div className="comment-list__comment comment">
      <h3 className="comment__title">{comment.name}</h3>
      <p className="comment__text">{comment.body}</p>
      <p className="comment__author">
        <span className="color__text">{comment.email}</span>
      </p>
    </div>
  );
}

export default Comment;
