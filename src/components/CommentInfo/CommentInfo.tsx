import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({
  id,
  name,
  email,
  body,
}) => (
  <li key={id} className="CommentInfo" data-cy="comments-list">
    <h3 data-cy="comment-name" className="CommentInfo__title">
      {name}
    </h3>
    <p data-cy="comment-email" className="CommentInfo__email">
      {email}
    </p>
    <p data-cy="comment-body" className="CommentInfo__text">
      {body}
    </p>
  </li>
);
