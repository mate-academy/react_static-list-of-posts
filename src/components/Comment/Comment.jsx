import React from 'react';
import { CommentTypes } from '../../default';

export const Comment = ({ comments }) => (
  <>
    {comments.map(comment => (
      <>
        <p className="comment__name">{comment.name}</p>
        <p className="comment__body">{comment.body}</p>
        <p className="comment__email">{comment.email}</p>
      </>
    ))}
  </>
);

Comment.propTypes = CommentTypes;
