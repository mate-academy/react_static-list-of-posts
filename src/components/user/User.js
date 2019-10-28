import React from 'react';

const User = ({ user }) => (
  <h1>
    <a href={`mailto:${user.email}`}>{user.name}</a>
  </h1>
);

export default User;
