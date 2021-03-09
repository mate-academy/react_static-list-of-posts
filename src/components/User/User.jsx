import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../../types';

export const User = ({ user }) => (
  <>
    <p>
      {user.name}
    </p>
    <a href={`mailto: ${user.email}`}>
      {user.email}
    </a>
    <p>
      {`${user.address.city}, ${user.address.street}, ${user.address.suite}`}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    UserType,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
