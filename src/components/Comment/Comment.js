import React from 'react';

function Comment( {comment} ) {
  return (
    <p>{comment.body}</p>
  );
}

export default Comment;
