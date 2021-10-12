import React from 'react';
import { Comments } from '../types/Comments';

export const CommentInfo:React.FC<{ comment: Comments }> = ({ comment }) => (
  <li>
    <p>
      {`Name: ${comment.name}`}
    </p>
    <p>
      {comment.body}
    </p>
    <p>
      {`email: ${comment.email}`}
    </p>
  </li>
);
