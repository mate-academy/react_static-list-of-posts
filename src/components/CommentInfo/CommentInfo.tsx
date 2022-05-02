import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <li className="CommentInfo">
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
