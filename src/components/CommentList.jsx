import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';

export const CommentList = ({ comments }) => (
  <div>
    <h2>Comments</h2>
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
