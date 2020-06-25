import React from 'react';

import './User.css';
import { UserAddress } from '../UserAddress.js/UserAddress';
import { UserTypes } from '../Shape/UserTypes';

export const User = (props) => {
  const {
    name,
    email,
    address,
  } = props;

  return (
    <>
      <li className="user__item user__item--name">
        {name}
      </li>
      <li className="user__item user__item--email">
        <a href="# ">
          {email}
        </a>
        <UserAddress {...address} />
      </li>
    </>
  );
};

User.propTypes = UserTypes;
