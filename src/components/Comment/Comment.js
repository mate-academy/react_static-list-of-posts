import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <>
    <span>
      {comment.name}
    </span>
    <a href="mailto:{email}">
      {comment.email}
    </a>
    <p>
      {comment.body}
    </p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Comment;
