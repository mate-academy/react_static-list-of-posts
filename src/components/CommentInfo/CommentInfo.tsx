import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <hr />
    <h3>
      {comment.name}
    </h3>
    <p>
      {comment.body}
    </p>
    <p>
      {comment.email}
    </p>
  </>
);
