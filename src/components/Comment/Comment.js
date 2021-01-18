import React from 'react';
import { CommentShape } from '../shapes';

const Comment = ({ comment }) => (
  <div>
    <span>{comment.name}</span>
    <a href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = CommentShape.isRequired;

export default Comment;
