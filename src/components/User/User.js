import React from 'react';

function User({ user: { name, email, address } }) {
  return (
    <>
      <h4>{name}</h4>
      <a href="mailto:{email}">{email}</a>
      <p>
        <span>Street: {address.street}</span><br />
        <span>City: {address.city}</span><br />
        <span>Suite: {address.suite}</span><br />
      </p>
    </>
  );
}

export default User;
