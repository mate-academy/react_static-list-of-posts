import React from 'react';
import { UsersType } from '../../types';

const User = ({ user }) => (
  <div>
    <p>{`User: ${user.name}`}</p>
    <p>{`Email: ${user.email}`}</p>
    <p>{`Address: ${user.address.city}, ${user.address.street}`}</p>
  </div>
);

User.propTypes = {
  user: UsersType.isRequired,
};

export default User;
