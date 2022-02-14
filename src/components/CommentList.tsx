import React from 'react';
import { FullPost } from '../types.ts/FullPost';
import { CommentInfo } from './CommentInfo';

export const CommentList: React.FC<FullPost> = (post) => (
  <ul>
    <strong>Comment-Info:</strong>
    {post.comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo {...comment} />
      </li>
    ))}
  </ul>
);
