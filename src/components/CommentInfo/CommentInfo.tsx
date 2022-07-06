import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

export type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h5 className="comemnt-name" data-cy="comment-name">
      {comment.name}
    </h5>
    <p className="comment-cody" data-cy="comment-body">
      {comment.body}
    </p>
    <h6 className="comment-email" data-cy="comment-email">
      {comment.email}
    </h6>
  </>
);
