import React from 'react';

const Comment = ({comment}) => (
  <div>
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <p>{`Email: ${comment.email}`}</p>
  </div>
);

export default Comment;
