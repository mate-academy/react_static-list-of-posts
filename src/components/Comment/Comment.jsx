import React from 'react';
import { CommentTypes } from '../../default';

export const Comment = ({ comments }) => (
  <>
    {comments.map(comment => (
      <>
        <li className="comment__name">{comment.name}</li>
        <li className="comment__body">{comment.body}</li>
        <li className="comment__email">{comment.email}</li>
      </>
    ))}
  </>
);

Comment.propTypes = CommentTypes;
