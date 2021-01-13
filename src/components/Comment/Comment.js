import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <>
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </>
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
