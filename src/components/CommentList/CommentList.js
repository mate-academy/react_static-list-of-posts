import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ commentList }) => (
  <div>
    {commentList.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
