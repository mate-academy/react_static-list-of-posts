import React from 'react';
import PropTypes from 'prop-types';

export default function User({ name, email, address }) {
  return (
    <>
      <p>
        {'Name: '}
        {name}
      </p>
      <p>
        {'Email: '}
        {email}
      </p>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
  }).isRequired,
};
