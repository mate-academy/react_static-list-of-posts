import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <>
      <p>{comment.name}</p>

      <p>{comment.body}</p>

      <p>{comment.email}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
