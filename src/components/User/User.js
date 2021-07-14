import React from 'react';
import { UserType } from '../../types';

export const User = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {`${user.address.city}, ${
        user.address.street}, ${
        user.address.suite}`}
    </p>
  </>
);

User.propTypes = {
  user: UserType.isRequired,
};
