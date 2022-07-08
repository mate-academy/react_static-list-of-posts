import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comments">
    <h4 className="comments__name">{comment.name}</h4>
    <p className="comments__body">{comment.body}</p>
    <p className="comments__email">{comment.email}</p>
  </div>
);
