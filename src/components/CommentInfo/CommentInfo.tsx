import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div data-cy="comment-name">{comment.name}</div>
    <div data-cy="comment-body">{comment.body}</div>
    <div data-cy="comment-email">
      <a
        href={`malito:${comment.email}`}
        className="comment__email-link"
      >
        {comment.email}
      </a>
    </div>
  </div>
);
