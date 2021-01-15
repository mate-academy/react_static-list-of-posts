import React from 'react';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ))
);
