import React from 'react';
import PropTypes from 'prop-types';

export function Comment({ name, body, email }) {
  return (
    <>
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
