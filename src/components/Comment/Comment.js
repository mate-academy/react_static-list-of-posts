import React from 'react';
import { commentType } from '../../types';

const Comment = ({ comment }) => (
  <div className="comment">
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: commentType.isRequired,
};

export default Comment;
