import React from 'react';
import { Comment } from '../../types/Comment';

type CommentInfoItem = {
  comment: Comment;
};

export const CommentInfo: React.FC<CommentInfoItem> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">pariatur omnis in</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>
);
