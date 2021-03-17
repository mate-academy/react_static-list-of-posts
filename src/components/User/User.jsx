import PropTypes from 'prop-types';
import React from 'react';
import { UserAddressType } from '../../types';

export const User = ({ name, email, address }) => (
  <>
    <p>
      <span role="img" aria-label="person emodji">👤: </span>
      {name}
    </p>
    <p>
      <b>@: </b>
      {email}
    </p>
    <div>
      <p>
        <span role="img" aria-label="house emodji">🏠: </span>
        {address.city}
        ,
        {' '}
        {address.street}
        ,
        {' '}
        {address.suite}
        .
      </p>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(UserAddressType).isRequired,
};
