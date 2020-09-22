import React from 'react';
import PropTypes from 'prop-types';

import './UserStyle.scss';

export const User = ({ name, email, address }) => (
  <div className="user-signature">
    Name:
    {' '}
    {name}
    <br />
    Email:
    {' '}
    {email}
    <br />
    Adress:
    {' '}
    {address.street}
    ,
    {' '}
    {address.suite}
    ,
    {' '}
    {address.city}
    ,
    {' '}
    {address.zipcode}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
    geo: PropTypes.shape({
      lat: PropTypes.string,
      lng: PropTypes.string,
    }),
  }).isRequired,
};
