
import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment }) {
  return (

    <li key={comment.id}>
      <strong>{`${comment.name} `}</strong>
      <span>{comment.email}</span>
      <p>{comment.body}</p>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Comment;
