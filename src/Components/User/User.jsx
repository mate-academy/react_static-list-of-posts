import React from 'react';
import PropTypes from 'prop-types';
import { UsersTypes } from '../../types/usersTypes';

export const User = ({ specificUser }) => (
  <>
    <p>{specificUser.name}</p>
    <p>{specificUser.email}</p>
    <p>{specificUser.address.city}</p>
    <p>{specificUser.address.street}</p>
    <p>{specificUser.address.suit}</p>
    <p>
      {specificUser.address.zipcode}
    </p>
  </>
);

User.propTypes = {
  specificUser: PropTypes.arrayOf(UsersTypes).isRequired,
};
