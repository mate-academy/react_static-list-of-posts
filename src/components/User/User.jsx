import React from 'react';
import './User.scss';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h4 className="user__name">
      {`${name} posted:`}
    </h4>
    <div className="user__email">
      {`E-mail: ${email}`}
    </div>
    <div className="user__address">
      {
        `Address:
        ${address.suite}
        ${address.street},
        ${address.city},
        ${address.zipcode}`
      }
    </div>
  </div>
);

User.propTypes = UserType;
