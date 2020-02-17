import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ commentsList }) => (
  commentsList.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))
);

CommentList.propTypes = {
  commentsList: PropTypes.arrayOf({
    comment: PropTypes.shape({
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
