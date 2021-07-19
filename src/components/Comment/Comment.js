import React from 'react';
import propTypes from 'prop-types';

export function Comment({ name, body, email }) {
  return (
    <>
      <h5>
        {name}
      </h5>
      <p>
        {body}
      </p>
      <p>
        {email}
      </p>
    </>
  );
}

Comment.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
};
