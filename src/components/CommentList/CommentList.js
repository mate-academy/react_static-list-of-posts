import React from 'react';
import './CommentList.scss';
import { Comment } from '../Comment';
import { TypeComments } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {' '}
    <b>Comments:</b>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: TypeComments.isRequired,
};
