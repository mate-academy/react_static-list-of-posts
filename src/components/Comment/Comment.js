import React from 'react';
import { TypeComment } from './TypeComment';

export const Comment = ({ comment }) => (
  <div>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: TypeComment.isRequired,
};
