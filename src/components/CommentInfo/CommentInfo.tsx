import React from 'react';
import { CommentsFromServer } from '../../types/Comments';

type Props = {
  comment: CommentsFromServer;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
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
};
