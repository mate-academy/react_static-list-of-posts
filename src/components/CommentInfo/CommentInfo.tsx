import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__header">
      <p>
        <span className="CommentInfo__name">
          <b>{comment.name}</b>
        </span>

        {' by '}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </p>
    </div>

    <p className="CommentInfo__body">
      {comment.body}
    </p>
  </div>
);
