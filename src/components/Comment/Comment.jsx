import React from 'react';
import './Comment.scss';

function Comment({ name, body, email }) {
  return (
    <div className="postList__post-comment">
      {`comment by `}
      <b>
        {name}
      </b>
      {`, `}
      {email}
      <br />
      <br />
      {body}
    </div>
  );
}

export default Comment;
