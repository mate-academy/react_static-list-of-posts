import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <p>
      {name}
    </p>
    <p>
      {email}
    </p>
    <p>
      {`${address.city} ${address.street} ${address.suite}`}
    </p>
  </>
);

export const UserTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

User.propTypes = UserTypes;
