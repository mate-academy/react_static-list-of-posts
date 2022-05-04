import React from 'react';
import { Comment } from '../../Types/types';
import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <li className="CommentInfo">
    <h4 data-cy="comment-name" className="CommentInfo__title">
      {name}
    </h4>
    <p data-cy="comment-email" className="CommentInfo__email">
      {email}
    </p>
    <p data-cy="comment-body" className="CommentInfo__text">
      {body}
    </p>
  </li>
);
