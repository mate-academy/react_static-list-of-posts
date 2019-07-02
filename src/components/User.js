import React from 'react';

const User = ({ data }) => {
  const { name, email, address} = data;

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <address>
        <div>{address.city}</div>
        <div>{address.street}</div>
        <div>{address.zipcode}</div>
      </address>
    </div>
  );
};

export default User;
