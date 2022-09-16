import React from 'react';
import { Comment } from '../../types/Comment';

type CommentType = {
  comment: Comment,
};

export const CommentInfo: React.FC<CommentType> = ({ comment }) => (
  <>
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {`by ${comment.email}`}

        <a
          className="CommentInfo__email"
          href={comment.email}
        >
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {comment.body}
      </div>
    </div>
  </>
);
