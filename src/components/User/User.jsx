import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <span>
    user--detail
    <ul>
      <li>
        name --
        {name}
      </li>
      <li>
        email --
        {email}
      </li>
      <li>
        address --
        {address.city + ' _ ' + address.street}
      </li>
    </ul>
  </span>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
