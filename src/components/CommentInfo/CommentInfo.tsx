import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h4 className="comments__username">
      {comment.name}
    </h4>

    <span className="comments__email">
      {comment.email}
    </span>

    <p className="comments__text">
      {comment.body}
    </p>
  </>
);
