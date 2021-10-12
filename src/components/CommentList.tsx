import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <>
    <ul className="CommentList">
      {comments.map(comment => (
        <li key={comment.id} className="CommentList-Item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  </>
);
