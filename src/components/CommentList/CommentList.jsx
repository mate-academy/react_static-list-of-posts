import React from 'react';

import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment key={comment.id} {...comment} />
  ))
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
