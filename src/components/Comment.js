import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <>
      <p>
        {'Comment: '}
        {comment.name}
      </p>
      <p>{comment.email}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};
