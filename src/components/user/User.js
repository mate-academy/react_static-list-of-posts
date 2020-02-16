import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

export const User = ({ name, email, address }) => (
  <div className="user">
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>{address.city}</p>
    </>
  </div>
);

const adressPropTypes = {
  city: PropTypes.string,
};

export const userPropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(adressPropTypes).isRequired,
};

User.propTypes = userPropTypes;
