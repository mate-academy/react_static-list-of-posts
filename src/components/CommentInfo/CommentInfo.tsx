import React from 'react';

import './CommentInfo.scss';

export interface Comment {
  name: string,
  body: string,
}

export const CommentInfo: React.FC<Comment> = ({ name, body }) => (
  <div className="comment">
    <div className="comment-name" data-cy="comment-name">{name}</div>
    <div className="comment-body" data-cy="comment-body">{body}</div>
  </div>
);
