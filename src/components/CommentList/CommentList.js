import React from 'react';
import PropTypes from 'prop-types';
import { Comment, commentTypes } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <div className="comments">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(commentTypes),
  ).isRequired,
};
