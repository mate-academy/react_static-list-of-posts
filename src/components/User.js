import React from 'react';

// eslint-disable-next-line react/prop-types
function User({ name, email, address }) {
  return (
    <h5>
      {name}
      <br />
      {email}
      <br />
      {address.city}
      ,&nbsp;
      {address.street}
      ,&nbsp;
      {address.suite}
    </h5>
  );
}

export default User;
