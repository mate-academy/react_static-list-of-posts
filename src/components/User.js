import React from 'react';
import './user.scss';

const User = ({ user }) => (
  <div className="user">
    <div className="user__photo"></div>
    <span className="user__name">{user.name}</span>
    <span className="user__address">City: {user.address.city}</span>
  </div>
);
export default User;
