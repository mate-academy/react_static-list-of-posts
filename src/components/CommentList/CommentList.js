import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
      />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
