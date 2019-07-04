/* eslint-disable react/prop-types,no-shadow */
import React from 'react';
import users from '../api/users';

const SingleUser = ({ userId }) => {
  const user = users.filter(user => user.id === userId);
  return (
    <span>{user.name}</span>
  );
};

export default SingleUser;
