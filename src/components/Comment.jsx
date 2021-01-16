import React from 'react';
import { CommentType } from './Types';

import './Comment.scss';

export const Comment = ({ comment }) => (
  <div>
    <div className="commentTitle">{comment.name}</div>
    {comment.body}
    <br />
    {comment.email}
  </div>
);

Comment.propTypes = CommentType.isRequired;
