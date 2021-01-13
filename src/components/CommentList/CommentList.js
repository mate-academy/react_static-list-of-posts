import React from 'react';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comm }) => (
  comm.map(comment => (
    <Comment {...comment} />
  ))
);
