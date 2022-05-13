import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <div className="comment-name" data-cy="comment-name">
      {`Name: ${comment.name}`}
    </div>
    <div className="comment-email" data-cy="comment-email">
      {`Email: ${comment.email}`}
    </div>
    <div className="comment-body" data-cy="comment-body">
      {comment.body}
    </div>
  </div>
);
