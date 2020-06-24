import React from 'react';

import './User.css';
import { UserAddress } from '../UserAddress.js/UserAddress';
import { UserTypes } from '../Shape/UserTypes';

export const User = props => (
  <>
    <li className="user__item user__item--name">
      {props.name}
    </li>
    <li className="user__item user__item--email">
      <a href="# ">
        {props.email}
      </a>
      <UserAddress {...props.address} />
    </li>
  </>
);

User.propTypes = UserTypes;
