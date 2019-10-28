import React from 'react';
import './comment.css';

function Comment ({ comment: { name, email, body } }) {
  return (
    <div>
      <h4 className="comment__header">{name}</h4>
      <a href="#" className="mail__link">{email}</a>
      <p className="comment__body">{body}</p>
    </div>
  );
}

export default Comment;
