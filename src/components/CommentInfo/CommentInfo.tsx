import React from 'react';
import { Comment } from '../Types/Types';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <ul>
    <li data-cy="comment-name">
      {`CommentName: ${comment.name}`}
    </li>
    <li data-cy="comment-body">
      {`CommentBody: ${comment.body}`}
    </li>
    <li data-cy="comment-email">
      {`CommentEmail: ${comment.email}`}
    </li>
  </ul>
);
