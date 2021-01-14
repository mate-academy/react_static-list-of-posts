import React from 'react';
import { Comment } from '../Comment';
import { TypeCommentList } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {' '}
    <b>Comments:</b>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment opinion={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = TypeCommentList;
