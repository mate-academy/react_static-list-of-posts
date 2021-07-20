import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <Comment userComment={comment} />
    ))}
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf().isRequired,
};
