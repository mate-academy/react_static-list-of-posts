
import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (
    <>
      <strong>
        {comment.name}
        {' '}
      </strong>
      <span>{comment.email}</span>
      <p>
        {comment.body}
        {' '}
      </p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
