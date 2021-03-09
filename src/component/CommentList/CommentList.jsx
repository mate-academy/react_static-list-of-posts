import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentsType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentsType).isRequired,
  ).isRequired,
};
