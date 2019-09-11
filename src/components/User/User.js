import React from 'react';
import './User.css';

function User({ user }) {
  const { name, email } = user;

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>
        {`
          ${user.address.city},
          ${user.address.street},
          ${user.address.suite}
        `}
      </div>
    </div>
  );
}




export default User;

