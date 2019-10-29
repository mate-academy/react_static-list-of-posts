import React from 'react';

function Comment({ comment }) {
  return (
    <div>
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <p>{`Email: ${comment.email}`}</p>
    </div>
  );
}

export default Comment;
