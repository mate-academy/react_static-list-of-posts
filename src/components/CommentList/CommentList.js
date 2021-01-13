import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comment }) => (
  comment.map(
    item => (<Comment {...item} key={item.id} />),
  )
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};
