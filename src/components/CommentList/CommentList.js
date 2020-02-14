import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  comments.map(comment => (
    <Comment {...comment} key={comment.id} />
  ))
);

export const CommentListPropTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
};

CommentList.propTypes = CommentListPropTypes;
