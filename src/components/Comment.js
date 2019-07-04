import React from 'react';

function Comment(props) {
  return (
    <li className="comment">
      <label>
        {props.comment.name}
      </label>
      <u>
        {props.comment.email}
      </u>
      <p>
        {props.comment.body}
      </p>
    </li>
  );
}

export default Comment;
