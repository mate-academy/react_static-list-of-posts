import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div>{name}</div>
    email:
    {' '}
    <a className="user__email" href={email}>{email}</a>
    <div>
      address:
      {address.street}
      ,
      {address.suite}
      ,
      {address.city}
      ,
      {address.zipcode}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
