import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <div className="commentInfo__name">
      <strong>{comment.name}</strong>
    </div>
    <div className="commentInfo__email">
      {comment.email}
    </div>
    <div className="commentInfo__body">
      {comment.body}
    </div>
  </div>
);
