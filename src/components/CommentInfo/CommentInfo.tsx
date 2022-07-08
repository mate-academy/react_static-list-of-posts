import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentInfo.scss';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment__box">
    <p data-cy="comment-email"><b>{`Comment from ${comment.email} `}</b></p>
    <p data-cy="comment-name">{comment.name}</p>
    <p data-cy="comment-body">{comment.body}</p>
  </div>
);

// 1. The `CommentInfo` accepts a `comment` object and renders a `name`, a `body`, and an `email`.
//    - Please, add `data-cy="comment-name"`, `data-cy="comment-body"`, and
//    `data-cy="comment-email"` attributes to `name`, `body` and `email` elements.
