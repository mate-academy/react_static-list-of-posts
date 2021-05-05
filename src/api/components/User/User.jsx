import React from 'react';
import { UserType } from '../Types';

export const User = ({ curentUser }) => {
  const getKeys = (obj) => {
    const arrKey = Object.keys(obj);

    const res = arrKey.map((userKey) => {
      if (typeof obj[userKey] === 'object') {
        return getKeys(obj[userKey]);
      }

      return (
        <p>
          {userKey}
          {' -- '}
          {obj[userKey]}
        </p>
      );
    });

    return res;
  };

  return getKeys(curentUser);
};

User.propTypes = {
  curentUser: UserType.isRequired,
};
