import React from 'react';
import './User.css';

function User({ user }) {
  return (
    <div className="post__author author">
      <address className="author__info">
        <span className="personal-info">
          <span>Name:</span>
          {user.name}
        </span>
        <span className="personal-info">
          <span>Address:</span>
          {user.address.city}
          , {user.address.street}
        </span>
        <span className="personal-info">
          <span>Email:</span>
          {user.email}
        </span>
        <span className="personal-info">
          <span>Phone:</span>
          {user.phone}
        </span>
      </address>
    </div>
  );
}

export default User;
