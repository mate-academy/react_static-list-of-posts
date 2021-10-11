import React from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../App';

export const CommentsList: React.FC<{ comments: Comment[]; }> = ({ comments }) => (
  <>
    {(comments.length > 0) ? (
      <ul className="post__list">
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <p>No comments</p>
    )}
  </>
);
