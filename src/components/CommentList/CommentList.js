import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ol>
    <h2>Comments:</h2>
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.defaultProps = {
  comments: [],
};
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};
