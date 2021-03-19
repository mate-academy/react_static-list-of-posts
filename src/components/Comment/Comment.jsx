import React from 'react';
import { CommentTypes } from '../../default';

export const Comment = ({ comments }) => (
  <>
    {comments.map(comment => (
      <>
        <li key={comment.id} className="comment__name">{comment.name}</li>
        <li key={comment.id} className="comment__body">{comment.body}</li>
        <li key={comment.id} className="comment__email">{comment.email}</li>
      </>
    ))}
  </>
);

Comment.propTypes = CommentTypes;
