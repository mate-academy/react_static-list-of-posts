import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = (user) => {
  const {
    user: {
      name,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
    },
  } = user;

  return (
    <div className="user">
      <h3>{name}</h3>
      <p>{email}</p>
      <address>
        <span>
          {`${zipcode}, ${city}, ${street}, ${suite}`}
        </span>
      </address>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }).isRequired,
};
