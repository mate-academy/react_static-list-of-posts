import React from 'react';
import { CommentInfo } from './CommentInfo';
import { Comment } from '../types/Comment';

export const CommentList: React.FC<{ comments: Comment[]; }> = ({ comments }) => (
  <>
    {(comments.length > 0) ? (
      <ul className="comments">
        {comments.map(comment => (
          <li key={comment.id} className="comments__item">
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No comments</p>
    )}
  </>
);
