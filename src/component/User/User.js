import React from 'react';
import './User.scss';
import { UserShape } from '../propTypes/UserShape';

export const User = ({ name, email, address }) => {
  const { street, suite, city, zipcode } = address;

  return (
    <div className="user">
      <h4>{name}</h4>

      <div className="user__email">
        <span>email: </span>

        <span className="user__italic">
          {email}
        </span>
      </div>

      <div className="user__address">
        <span>address: </span>

        <span className="user__italic">
          {`${street}, ${suite}, ${city}, ${zipcode}`}
        </span>
      </div>
    </div>
  );
};

User.propTypes = UserShape.isRequired;
