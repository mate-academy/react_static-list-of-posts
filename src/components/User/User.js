import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ username, email, address }) => (
  <>
    <p>
      {`Author: ${username}`}
    </p>
    <p>
      {`Email: ${email}`}
    </p>
    <p>
      {`Address:
        city ${address.city},
        street${address.street}`}
    </p>
  </>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
