import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="CommentInfo__title">
      <h3 className="CommentInfo__name">{comment.name}</h3>
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
  </>
);
