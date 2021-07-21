import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  <Comment comment={comment} />
);

CommentList.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
