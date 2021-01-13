import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <p>
      {`${name}, ${email}, ${Object.values(address).slice(0, -2).join(', ')}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
  }).isRequired,
};
