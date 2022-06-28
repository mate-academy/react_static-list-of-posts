import React from 'react';
// import comments from '../../api/comments';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <>
    <div data-cy="comment-name">
      <strong>{name}</strong>
    </div>

    <div data-cy="comment-body">
      {body}
    </div>

    <div data-cy="comment-email">
      {`Email: ${email}`}
    </div>
  </>
);
