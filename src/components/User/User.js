import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address: { city, street, zipcode } } = user;

  return (
    <div className="user">
      <p>Contact info:</p>
      <p>{`name: ${name}, email: ${email}`}</p>
      <p>{`address: ${zipcode}, ${street}, ${city}`}</p>
    </div>
  );
};

const addressTypes = {
  city: PropTypes.string,
  street: PropTypes.string,
  zipcode: PropTypes.string,
};

export const userTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape(addressTypes),
};

User.propTypes = {
  user: PropTypes.shape(userTypes).isRequired,
};
