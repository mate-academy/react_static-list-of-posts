import React from 'react';
import { usersType } from '../../types';

const User = ({ user }) => (
  <>
    <p>{`User: ${user.name}`}</p>
    <p>{`Email: ${user.email}`}</p>
    <p>{`Address: ${user.address.city}, ${user.address.street}`}</p>
  </>
);

User.propTypes = {
  user: usersType.isRequired,
};

export default User;
