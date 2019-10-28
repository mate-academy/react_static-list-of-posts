import React from 'react';

function Comment(props) {
  const {comment} = props;
  return (
    <p>{comment.body}</p>
  );
}

export default Comment;
