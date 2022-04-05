import React from 'react';
import { Coment } from '../Types/Types';

type Props = {
  comment: Coment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p data-cy="comment-name">
      {comment.name}
    </p>
    <p data-cy="comment-email">
      {comment.email}
    </p>
    <p data-cy="comment-body">
      {comment.body}
    </p>
  </>
);