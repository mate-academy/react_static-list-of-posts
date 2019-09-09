import React from 'react';
import './User.css';

function User({ user }) {
  return (
    <div className="post__author">
      <address className="author__info">
        <span className="span__block">
          <span className="color__text">Name:</span>
          {user.name}
        </span>
        <span className="span__block">
          <span className="color__text">Address:</span>
          {user.address.city}
          , {user.address.street}
        </span>
        <span className="span__block">
          <span className="color__text">Email:</span>
          {user.email}
        </span>
        <span className="span__block">
          <span className="color__text">Phone:</span>
          {user.phone}
        </span>
      </address>
    </div>
  );
}

export default User;
