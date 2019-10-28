import React from 'react';
import './comment.css';

function Comment ({ comment }) {
  return (
    <div>
      <h4 className="comment__header">{comment.name}</h4>
      <a href="#" className="mail__link">{comment.email}</a>
      <p className="comment__body">{comment.body}</p>
    </div>
  );
}

export default Comment;
