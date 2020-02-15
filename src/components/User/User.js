import React from 'react';
import PropTypes from 'prop-types';

export const User = ({
  user: { name, email, address: { city, street, zipcode } },
}) => (
  <div className="user">
    <p>Contact info:</p>
    <p>{`name: ${name}, email: ${email}`}</p>
    <p>{`address: ${zipcode}, ${street}, ${city}`}</p>
  </div>
);

const addressData = {
  city: PropTypes.string,
  street: PropTypes.string,
  zipcode: PropTypes.string,
};

export const userData = {
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape(addressData),
};

User.propTypes = {
  user: PropTypes.shape(userData).isRequired,
};
