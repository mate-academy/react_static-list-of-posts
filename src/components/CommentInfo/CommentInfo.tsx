import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type CommentInfoProps = {
  comment: Comment,
};

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <div className="commentInfo">
    <span className="commentInfo__email">
      {'Email: '}
      {comment.email}
    </span>

    <strong className="commentInfo__name">
      {comment.name}
    </strong>

    <p className="commentInfo__body">
      {comment.body}
    </p>

  </div>
);
