import React from 'react';

export const CommentInfo = (props) => {
  return (
    <div>
      <h4>{props.comment.name}</h4>
      {' - '}
      <a href={props.comment.email}>{props.comment.email}</a>
      <p>{props.comment.body}</p>
    </div>
  );
};
