import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <span>Name: {name} /</span>
    <span> Email: {email}</span>
    <div className="address">
      <span>Address (</span>
      <span>City: "{address.city}" </span>
      <span>str. "{address.street}" </span>
      <span>{address.suite} )</span>
    </div>
  </>
);

User.prototype = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }),
  ),
};

User.defaultProps = {
  address: {},
};
