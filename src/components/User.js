import React from 'react';

function User(props) {

  const {name, email, address} = props;

  return (
    <div>
      <span>{name}</span>
      <span><a href={email}>{email}</a></span>
      <span>{address}</span>
    </div>
  );
}

export default User;
