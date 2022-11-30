import React from 'react';
import { Comments } from '../types/Comments';

type Prop = {
  comment: Comments
};

export const CommentInfo: React.FC<Prop> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={`malito:${comment.email}`}
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
