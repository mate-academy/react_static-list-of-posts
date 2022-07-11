import React from 'react';
import './CommentInfo.scss';
import { Comments } from '../types/Comments';

export const CommentInfo: React.FC<Comments> = ({
  name,
  body,
  email,
}) => (
  <>
    <h3 className="post__comments-title" data-cy="comment-name">
      {name}
    </h3>
    <p className="post__comments-mail" data-cy="comment-email">
      {email}
    </p>
    <p className="post__comments-body" data-cy="comment-body">
      {body}
    </p>
  </>
);
