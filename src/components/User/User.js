import React from 'react';
import { TypeOfUser } from '../../types';

export const User = ({ user }) => (
  <div className="post__author">
    <span className="post__author-name">{user.name}</span>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <span>{user.address.city}</span>
  </div>
);

User.propTypes = {
  user: TypeOfUser.isRequired,
};
