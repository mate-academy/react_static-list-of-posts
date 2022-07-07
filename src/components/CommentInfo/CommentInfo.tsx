import React from 'react';

import './CommentInfo.scss';
import { Comments } from '../types/Comments';

export const CommentInfo: React.FC<Comments> = ({ name, body, email }) => (
  <>
    <h3 className="posts__comment-title" data-cy="comment-name">
      {name}
    </h3>
    <p className="posts__comment-mail" data-cy="comment-email">
      {email}
    </p>
    <p className="posts__bottom" data-cy="comment-body">
      {body}
    </p>
  </>
);
