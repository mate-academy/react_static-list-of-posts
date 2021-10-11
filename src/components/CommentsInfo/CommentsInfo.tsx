import React from 'react';
import { Comment } from '../../Types/Comment';

export const CommentsInfo: React.FC<{ comments: Comment[] }> = ({ comments }) => (
  <>
    <h3 className="comments">Comments:</h3>
    {(comments.length > 0) ? (
      <ul className="comments__list">
        {comments.map(comment => (
          <li key={comment.id} className="comments__item comment">
            <span className="comment__name">{comment.name}</span>
            <span>{comment.email}</span>
            <p className="comment__text">{comment.body}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No comments</p>
    )}
  </>
);
