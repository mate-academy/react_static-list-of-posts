import React from 'react';

const CommentComponent = (props) => {
  return (
    <li key={props.comment.id}>
      <h3>{props.comment.name}</h3>
      <p>{props.comment.body}</p>
      <p>{props.comment.email}</p>
    </li>
  );
};

export default CommentComponent;
