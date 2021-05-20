import React from 'react';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  const emailLink = `mailto:${email}`;

  return (
    <div className="mt-4">
      <p>
        {'Author: '}
        {name}
      </p>
      <p>
        {'Email: '}
        <a href={emailLink}>{email}</a>
      </p>
      <p>
        {'Address: '}
        {address.city}
        {', '}
        {address.street}
        {', '}
        {address.suite}
      </p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
