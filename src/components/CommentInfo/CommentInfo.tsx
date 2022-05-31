import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comments: Comment
};
export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div>
    <p data-cy="comment-name">
      {comments.name}
    </p>

    <p data-cy="comment-body">
      {comments.body}
    </p>

    <p data-cy="comment-email">
      {comments.email}
    </p>
  </div>
);
