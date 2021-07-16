import React from 'react';
import propTypes from 'prop-types';

export function Comment({ name, body, email }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{email}</p>
    </>
  );
}

export const commentType = propTypes.shape({
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
});

Comment.propTypes = {
  ...commentType.isRequired,
};
