import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="User">
    {name}
    {` - `}
    {email}
    <div>
      Address:
      {` `}
      {address.street}
      {`, `}
      {address.suite}
      {`, `}
      {address.city}
      {`, `}
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
