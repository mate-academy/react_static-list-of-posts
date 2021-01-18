import React from 'react';
import { TypeComment } from '../../types';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);

Comment.propTypes = {
  comment: TypeComment.isRequired,
};
