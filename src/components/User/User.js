import React from 'react';
import './User.css';

const User = props => (
  <div className="user-bar">
    <p className="user-bar__name">{props.user.name}</p>
    <p className="user-bar__email">{props.user.email}</p>
  </div>
);

export default User;
