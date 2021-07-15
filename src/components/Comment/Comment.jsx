import React from 'react';
import PropTypes from 'prop-types';

export function Comment({ name, body, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <div>
        <strong>Email:</strong>
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
