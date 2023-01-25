import React from 'react';
import { CommentType } from '../../types/Comment';

interface CommentInfoPropsType {
  comment: CommentType;
}

export const CommentInfo: React.FC<CommentInfoPropsType> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

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
