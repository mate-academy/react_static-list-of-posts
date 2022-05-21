import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <div className="CommentInfo">
    <span className="CommentInfo__block" data-cy="comment-name">
      <p className="CommentInfo__block-title">{'Name: '}</p>
      <p>{name}</p>
    </span>
    <span className="CommentInfo__block" data-cy="comment-email">
      <p className="CommentInfo__block-title">{'Email: '}</p>
      <a href="mailto:{email}">{email}</a>
    </span>
    <span className="CommentInfo__block" data-cy="comment-body">
      <p className="CommentInfo__block-title">{'Comment: '}</p>
      <p>{body}</p>
    </span>
  </div>
);
