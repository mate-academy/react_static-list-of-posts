import React from 'react';
import './User.css';
import { TypeUser } from '../../types';

const User = ({ user }) => (
  <div className="user">
    <p className="user_name">
      {user.name}
    </p>
    <p className="user_email">
      {user.email.toLowerCase()}
    </p>
    <p className="user_address">
      {`city: ${user.address.city} st.: ${user.address.street}`}
    </p>
  </div>
);

User.propTypes = {
  user: TypeUser.isRequired,
};

export default User;
