import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.email}</p>
    <p>{comment.body}</p>
  </>
);

Comment.propTypes = {
  comment: CommentType.isRequired,
};
