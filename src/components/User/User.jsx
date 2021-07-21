import React from 'react';
import './User.scss';

import { userPropTypes } from '../TypesOfProp';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { street, suite, city, zipcode } = address;

  return (
    <>
      <p className="post__author">{name}</p>
      <p className="post__author-email">{email}</p>
      <span className="post__author-address">
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </span>

    </>
  );
};

User.propTypes = userPropTypes;
