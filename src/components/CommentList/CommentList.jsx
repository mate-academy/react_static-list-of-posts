import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { TypeComment } from '../../types';

export const CommentList = ({ comments }) => (
  comments.map(comment => <Comment comment={comment} />)
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(TypeComment).isRequired,
};
