import React from 'react';

const User = ({ name, email, address }) => (
  <>
    <p>
      <strong>{name}</strong>
    </p>
    <a href="#">
      {email}
    </a>
    <address>
      {address.street}
      {', '}
      {address.suite}
      {', '}
      {address.city}
    </address>
  </>
);

export default User;
