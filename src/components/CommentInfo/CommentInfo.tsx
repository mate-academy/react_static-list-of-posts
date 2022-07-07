import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, email, body }) => (
  <div className="comment">
    <h3 className="comment__name" data-cy="comment-name">{name}</h3>
    <p className="comment__body" data-cy="comment-body">{body}</p>
    <i className="email comment__email" data-cy="comment-email">{email}</i>
  </div>
);
