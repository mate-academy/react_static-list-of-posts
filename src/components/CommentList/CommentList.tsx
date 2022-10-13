import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

// eslint-disable-next-line max-len
export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
