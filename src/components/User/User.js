import React from 'react';
import propTypes from 'prop-types';

export function User({ name, email, address }) {
  return (
    <>
      <p>
        {`Author name: ${name}`}
      </p>
      <p>
        {`Author email: ${email}`}
      </p>
      <p>
        {`Author address: ${address}`}
      </p>
    </>
  );
}

User.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
};
