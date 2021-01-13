import React from 'react';
import { Comment } from './Comment';
import { TypeOfComments } from '../types';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </ul>
);

CommentList.propTypes = TypeOfComments;
