import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

export const CommentInfo:React.FC<Comment> = ({ ...comment }) => (
  <li className="commentInfo" key="comment.id">
    <strong>
      {comment.name}
    </strong>
    {` (${comment.email})`}
    <p>
      {comment.body}
    </p>
  </li>
);
