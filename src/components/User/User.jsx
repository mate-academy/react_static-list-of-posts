import React from 'react';
import { UserType } from '../../types';
import './user.scss';

export const User = ({ username, email, address }) => (
  <div className="userbox">
    <div className="userinfo">
      <p>
        User:
        {username}
      </p>
      <p>
        Email:
        {email}
      </p>
    </div>
    <p>
      Address:
      {address}
    </p>
  </div>
);

User.propTypes = UserType.isRequired;
