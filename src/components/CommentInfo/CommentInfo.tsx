import React from 'react';
import { Comment } from '../../types/comment';
import './CommentInfo.scss';

export const CommentInfo:React.FC<Comment> = ({
  name,
  email,
  body,
}) => (
  <li className="comment-collection">
    <h3 data-cy="comment-name" className="comment-collection__title">
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
