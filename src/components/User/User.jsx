import React from 'react';
import { TypeUser } from '../../types';
import './User.scss';

const User = ({ user }) => {
  const { name, email, address } = user;
  const { street, suite, city, zipcode } = address;
  const addressString = `${street} St., ${suite}, ${city}, ${zipcode}`;

  return (
    <div className="user post__user">
      <h4 className="user__title">User info:</h4>
      <span>{`Name: ${name}`}</span>
      <span>{`Email: ${email}`}</span>
      <span>{`Address: ${addressString}`}</span>
    </div>
  );
};

User.propTypes = {
  user: TypeUser.isRequired,
};

export { User };
