import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ comment }) => (
  <>
    <p>
      <strong>
        User
      </strong>
      {' - '}
      {comment.name}
    </p>
    <p>
      <strong>
        Email
      </strong>
      {' - '}
      {comment.email}
    </p>
    <p>
      <strong>
        Comment
      </strong>
      {' : '}
      {comment.body}
    </p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
