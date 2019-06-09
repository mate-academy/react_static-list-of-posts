import React from 'react'

export default function User(props) {
  const { name, email, address } = props.info;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>{address ? `Address: ${address.city}` : ''}</p>
    </div>
  );
}
