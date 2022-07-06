import React from 'react';
import { Comment } from '../../types/comment';

import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
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
