import React from 'react';
// import PropTypes from 'prop-types';
import { userPropTypes } from '../../types';

export const User = ({ user }) => (
  <>
    <span>
      {'User Name: '}
      {user.name}
    </span>
    <span>
      {'Email: '}
      {user.email}
    </span>
    <span>
      {'Address: '}
      {user.address.city}
      {', '}
      {user.address.street}
      {', '}
      {user.address.suite}
    </span>
  </>
);

User.defaultProps = {
  user: '',
};

User.propTypes = {
  user: userPropTypes,
};
