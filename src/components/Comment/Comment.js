import React from 'react';

// eslint-disable-next-line react/prop-types
function Comment({ comment }) {
  return (
    <li className="comment">
      <p className="comment-body">{comment.body}</p>
      <p className="comment-author">{`${comment.name}, ${comment.email}`}</p>
    </li>
  );
}

export default Comment;
