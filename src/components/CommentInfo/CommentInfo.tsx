import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  commemt: Comment
};

export const CommentInfo: React.FC<Props> = ({ commemt }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{commemt.name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${commemt.email}`}
      >
        {commemt.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {commemt.body}
    </div>
  </div>
);
