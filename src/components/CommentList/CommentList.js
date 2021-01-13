import React from 'react';
import { Comment } from '../Comment';
import { CommentListType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => <Comment {...comment} />)}
  </ul>
);

CommentList.propTypes = CommentListType;
