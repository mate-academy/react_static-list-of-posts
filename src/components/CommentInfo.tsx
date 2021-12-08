import React from 'react';

import { Comment } from '../types';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <div className="Comments">
    <div className="Comments__email">{comment.email}</div>
    <div className="Comments__name">{comment.name}</div>
    <div className="Comments__text">{comment.body}</div>
  </div>
);
