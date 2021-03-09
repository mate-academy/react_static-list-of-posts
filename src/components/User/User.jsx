import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address: { city, street, suite, zipcode } } = user;

  const getAddressItemHTML = str => (str ? `${str}, ` : null);

  return (
    <div className="User">
      User:
      {' '}
      {name}
      <br />
      {email}
      <br />
      {getAddressItemHTML(city)}
      {getAddressItemHTML(street)}
      {getAddressItemHTML(suite)}
      {zipcode}
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};
