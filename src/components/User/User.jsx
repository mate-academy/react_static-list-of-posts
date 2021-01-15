import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  const { city, street, suite, zipcode } = address;

  return (
    <div className="user">
      <p>
        Author:
        {` ${name}`}
      </p>
      <p>
        email:
        {` ${email}`}
      </p>
      <p>
        adress:
        {` ${city}, ${street}, ${suite}, ${zipcode}`}
      </p>
    </div>
  );
}

User.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
