import React from 'react';
import { userType } from '../../typesValidation';
import './user.scss';

export const User = ({ name, email, address }) => (
  <div className="user">

    <span className="name">
      {name}
    </span>

    <div className="contacts">
      <span>
        @:
        {' '}
        {email}
        {`  |  `}
      </span>
      <span className="adress">
        {address.city}
        ,
        {address.street}
        ,
        {address.suite}
      </span>
    </div>

  </div>
);

User.propTypes = userType.isRequired;
