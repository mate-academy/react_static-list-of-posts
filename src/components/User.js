import React from 'react';

export function User(props) {
  const {
    name,
    email,
    address,
  } = props;

  return (
    <div className="user">
      <span>{name}</span>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <span>{`${address.city}, ${address.street} st., ${address.suite}. Zipcode: ${address.zipcode}`}</span>
    </div>
  );
}
