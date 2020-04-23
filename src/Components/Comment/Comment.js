import React from 'react';
import PropTypes from 'prop-types';

export function Comment({ comment }) {
  return (
    <>
      <h3>
        {comment.name}
      </h3>
      <p>
        {comment.body}
      </p>
      <p>
        {comment.email}
      </p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
