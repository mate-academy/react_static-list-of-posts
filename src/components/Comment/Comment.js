import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <div>
    <span>{comment.name}</span>
    <a href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p>{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Comment;
