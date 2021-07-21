import React from 'react';
import './User.scss';

import { userPropTypes } from '../TypesOfProp';

export const User = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <p className="post__author">{name}</p>
      <p className="post__author-email">{email}</p>
    </>
  );
};

User.propTypes = userPropTypes;
