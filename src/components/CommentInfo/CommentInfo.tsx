import React from 'react';
import { IComment } from '../../types/Comment';
import './CommentInfo.scss';

type CommentInfoProps = {
  comment: IComment,
};

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <div className="CommentInfo">
    <span className="CommentInfo__email">
      {'Email: '}
      {comment.email}
    </span>

    <strong className="CommentInfo__name">
      {comment.name}
    </strong>

    <p className="CommentInfo__body">
      {comment.body}
    </p>

  </div>
);
