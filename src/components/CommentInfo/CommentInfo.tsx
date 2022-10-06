import React from 'react';
import { UserComment } from '../../types/UserComment';

type CommentInfoProps = {
  comment: UserComment
};

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <div key={comment.id} className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.name}
      </strong>

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
