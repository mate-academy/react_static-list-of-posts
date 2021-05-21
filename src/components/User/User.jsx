import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address: { city, street } }) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{`${city}: ${street}`}</p>
  </div>
);

const AddressType = PropTypes.shape({
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
});

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressType.isRequired,
};
