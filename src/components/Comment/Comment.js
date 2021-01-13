import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <div className="message is-info">
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Comment;
