import React from 'react';
import UserShape from '../../shapes/UserShape';

const User = ({ name, email, address }) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>
      {`${address.suite}, ${address.street}, }
      {${address.city}, ${address.zipcode}`}
    </p>
  </div>
);

User.propTypes = UserShape;

export default User;
