import React from 'react';
import { Comments } from '../../types/Comments';

import './CommentInfo.scss';

export const CommentInfo: React.FC<Comments> = ({
  name,
  email,
  body,
}) => (
  <li className="CommentInfo">
    <h3 data-cy="comment-name">
      {`Title: ${name}`}
    </h3>
    <a
      href={`mailto:${email}`}
      data-cy="comment-email"
      className="CommentInfo__link"
    >
      {email}
    </a>
    <p data-cy="comment-body">
      {body}
    </p>
  </li>
);
