import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { city, street, suite, zipcode } = address;

  return (
    <div className="user">
      <p>{`name: ${name}`}</p>
      <p>{`email: ${email}`}</p>
      <p>{`address: ${city}, ${street}, ${suite}, ${zipcode}`}</p>
    </div>
  );
};

export const TypeUser = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

User.propTypes = TypeUser;
