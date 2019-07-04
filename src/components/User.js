import React from 'react';

const User = props => (
  <div className="user">
    <span>{props.user.name}</span>
    <span>{props.user.email}</span>
  </div>
);

export default User;
