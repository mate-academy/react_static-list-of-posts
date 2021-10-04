import React from 'react';
import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<Comment> = ({ name, email, body }) => (
  <li className="comments__field">
    <div className="comments__email">
      <strong>From: </strong>
      {email}
    </div>
    <div className="comments__title">
      {name}
    </div>
    <div className="comments__body">
      {body}
    </div>
  </li>
);
