import React from 'react';
import './User.css';

const User = ({ user }) => (
  <div className="post-card__author">
    <div className="author-title">
      <span className="author-title__item">Name: </span>
      {user.name}
    </div>
    <div className="author-title">
      <span className="author-title__item">Email: </span>
      {user.email}
    </div>
    {user.address && (
      <div className="author-title">
        <span className="author-title__item">Address: </span>
        <span>{user.address.city}</span>
        <span>, </span>
        <span>{user.address.street}</span>
        <span>, </span>
        <span>{user.address.zipcode}</span>
      </div>
    )}
  </div>
);

export default User;
