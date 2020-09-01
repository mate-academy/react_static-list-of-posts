import React from 'react';

const User = user => (
  <div className="post__author">
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {user.address.street}
      {', '}
      {user.address.suite}
      {', '}
      {user.address.city}
    </p>
  </div>
);

export default User;
