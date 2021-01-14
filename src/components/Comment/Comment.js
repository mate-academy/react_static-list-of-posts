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

Comment.propTypes = {
  comment: CommentShape.isRequired,
};

export default Comment;
