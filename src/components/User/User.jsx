import React from 'react';

export function User({user}) {
  const { name, email, address } = { ...user };

  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>
        {`${address.street}, `
        + `${address.suite}, `
        + `${address.city}, `
        + `${address.zipcode}`}
      </p>
    </>
  );
}
