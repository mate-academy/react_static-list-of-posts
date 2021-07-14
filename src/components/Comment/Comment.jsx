import React from 'react';
import CommentsType from '../../types/commentsTypes';

export const Comment = ({ comment }) => (
  <>
    <p>
      <strong>Name: </strong>
      {comment.name}
    </p>
    <p>{comment.body}</p>
    <p>
      <strong>Email: </strong>
      {comment.email}
    </p>
  </>
);

Comment.propTypes = {
  comment: CommentsType.isRequired,
};
