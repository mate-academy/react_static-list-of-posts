import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <tr>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.body}</td>
    </tr>

  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
