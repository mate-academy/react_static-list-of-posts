import React from 'react';
import PropTypes from 'prop-types';

function Comment({ name, body, email }) {
  return (
    <>
      <p>{name}</p>

      <p>{body}</p>

      <p>{email}</p>
    </>
  );
}

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
