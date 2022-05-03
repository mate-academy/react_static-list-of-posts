import React from 'react';
import { CommentInfo } from './CommentInfo';

import { Comment } from '../types/Comment';

type Props = {
  comment: Comment[];
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul>
    {comment.map(com => (
      <li key={com.id}>
        <CommentInfo comment={com} />
      </li>
    ))}
  </ul>
);
