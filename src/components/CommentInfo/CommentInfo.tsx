import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types/comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <>
      <p className="comment__commentName" data-cy="comment-name">
        {comment.name}
      </p>

      <p className="comment__commentBody" data-cy="comment-body">
        {comment.body}
      </p>

      <p className="comment__commentEmail" data-cy="comment-email">
        {comment.email}
      </p>
    </>
  </div>
);
