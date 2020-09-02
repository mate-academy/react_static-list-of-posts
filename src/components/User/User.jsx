import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p>{`Post from ${name}`}</p>
    <p>{`${email}`}</p>
    <p>{`From ${address.city}`}</p>
    <p>{`${address.zipcode}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
