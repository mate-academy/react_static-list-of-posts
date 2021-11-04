import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

export const CommentInfo:React.FC<Comment> = ({ name, email, body }) => (
  <li className="commentInfo" key="comment.id">
    <strong>
      {name}
    </strong>
    {` (${email})`}
    <p>
      {body}
    </p>
  </li>
);
