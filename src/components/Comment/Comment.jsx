import React from 'react';
import { commentShape } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);

Comment.propTypes = {
  comment: commentShape.isRequired,
};
