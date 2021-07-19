import React from 'react';
import { UserTypes } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <>
    <div>
      <p>
        <span className="user__info">{'User Name: '}</span>
        {user.name}
      </p>
    </div>
    <div>
      <p>
        <span className="user__info">{'Email: '}</span>
        {user.email}
      </p>
    </div>
    <div>
      <p>
        <span className="user__info">{'Address: '}</span>
        {`${user.address.city}, ${user.address.street}, ${user.address.suite}`}
      </p>
    </div>
  </>
);

User.defaultProps = {
  user: '',
};

User.propTypes = {
  user: UserTypes,
};
