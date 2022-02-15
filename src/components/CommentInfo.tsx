import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 className="comment__name">
      {comment.name}
    </h3>

    <p className="comment__body">
      {comment.body}
    </p>

    <a href={`mailto:${comment.email}`} className="comment__email">
      {comment.email}
    </a>
  </>
);
