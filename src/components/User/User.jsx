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
  user: PropTypes.shape(UserType).isRequired,
};
