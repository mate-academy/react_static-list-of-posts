import React from 'react';
import { Comment } from '../Comment';
import { CommentListType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = CommentListType;
