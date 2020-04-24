import React from 'react';
import PropTypes from 'prop-types';
import { Comment, commentTypes } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentTypes)).isRequired,
};
