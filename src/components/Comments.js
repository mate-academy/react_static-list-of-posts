import React from 'react';

function Comments({ comment: { name, email, body } }) {
  return (
    <div className="comment_box">
      <h4>{name}</h4>
      <a href="#">{email}</a>
      <p>{body}</p>
    </div>
  );
}

export default Comments;
