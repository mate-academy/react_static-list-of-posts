import React from 'react';
import { userType } from '../types';

const User = ({ data }) => (
  <div>
    <b>User:</b>
    {data.name}
    <br />
    <b>Email:</b>
    {data.email}
    <br />
    <b>Address:</b>
    {`${data.address.city}, ${data.address.street}`}
  </div>
);

User.propTypes = userType.isRequired;

export default User;
