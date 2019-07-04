import React from 'react';

function Comment( {commentData} ) {
  return (
    <li className="comment">
      <label>
        {commentData.name}
      </label>
      <u>
        {commentData.email}
      </u>
      <p>
        {commentData.body}
      </p>
    </li>
  );
}

export default Comment;
