import React from 'react';
import { userType } from '../types';

const User = ({ user }) => (
  <div>
    <b>User:</b>
    {user.name}
    <br />
    <b>Email:</b>
    {user.email}
    <br />
    <b>Address:</b>
    {`${user.address.city}, ${user.address.street}`}
  </div>
);

User.propTypes = userType.isRequired;

export default User;
