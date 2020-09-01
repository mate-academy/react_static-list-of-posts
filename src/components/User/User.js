import React from 'react';
import { UserShape } from '../../shapes';
import './user.css';

export const User = ({ user }) => (
  <div className="user">
    <span className="user__name">{user.name}</span>
    <a className="user__email" href={`mailto:${user.email}`}>{user.email}</a>
    <span className="user__address">
      {`${user.address.city}, ${user.address.street}`}
    </span>
  </div>
);

User.propTypes = {
  user: UserShape.isRequired,
};
