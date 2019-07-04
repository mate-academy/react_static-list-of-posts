import React from 'react';

function Comment( {comment} ) {
  return (
    <li className="comment">
      <label>
        {comment.name}
      </label>
      <u>
        {comment.email}
      </u>
      <p>
        {comment.body}
      </p>
    </li>
  );
}

export default Comment;
