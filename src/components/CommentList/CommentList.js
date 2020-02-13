import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  comments.map(comment => <Comment key={comment.id} {...comment} />)
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
