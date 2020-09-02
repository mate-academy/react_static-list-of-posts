import React from 'react';

function User(user) {
  return (
    <div className="postList__post-user">
      {user.name}
      {`, `}
      {user.email}
      <br />
      {user.address.zipcode}
      {`, `}
      {user.address.city}
      {`, `}
      {user.address.street}
      {`, `}
      {user.address.suite}
    </div>
  );
}

export default User;
