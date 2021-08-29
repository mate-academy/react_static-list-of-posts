import React from 'react';
import { Comment } from '../Types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, email, body }) => (
  <>
    <h6>
      {name}
      <small className="text-muted">
        {` (${email})`}
      </small>
    </h6>
    <span>{body}</span>
  </>
);
