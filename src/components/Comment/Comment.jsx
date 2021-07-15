import React from 'react';
import { commentTypes } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <span>
      {'Name: '}
      {comment.name}
    </span>
    <p>{comment.body}</p>
    <span>
      {'Email: '}
      {comment.email}
    </span>
  </>
);

Comment.defaultProps = {
  comment: '',
};

Comment.propTypes = {
  comment: commentTypes,
};
