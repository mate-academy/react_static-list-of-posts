import React from 'react';
import { Comments } from '../types/Comments';
import { CommentInfo } from './CommentInfo';

export const CommentList: React.FC<{ comments: Comments[] }> = ({ comments }) => (
  <>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </>
);
