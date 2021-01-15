import React from 'react';
import typeUser from '../../types';

const User = ({ user }) => (
  <section>
    name:
    {user.name}
    <br />
    e-mail:
    {user.email}
    <br />
    address:
    {user.address.zipcode}
    ,
    {user.address.city}
    ,
    {user.address.street}
    ,
    {user.address.suite}
  </section>
);

User.propTypes = { user: typeUser.isRequired };

export default User;
