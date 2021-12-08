import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <p className="CommentInfo__name">{comment.name}</p>
    <p className="CommentInfo__email">{comment.email}</p>
    <p className="CommentInfo__body">{comment.body}</p>
  </div>
);
