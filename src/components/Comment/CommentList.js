import React from 'react';
import { TypeComment } from './TypeComment';
import { Comment } from './Comment';

export const CommentList = ({ comment }) => (
  <ul>
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  </ul>
);

CommentList.propTypes = {
  comment: TypeComment.isRequired,
};
