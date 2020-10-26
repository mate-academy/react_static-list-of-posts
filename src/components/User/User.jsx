import React from 'react';
import { UserShape } from '../shapes/UserShape';

import './User.scss';

export const User = ({ name, email, address }) => {
  const { street, suite, city, zipcode } = address;

  return (
    <>
      <h1 className="user__name">{name}</h1>
      <p className="user__email">
        {`email: ${email}`}
      </p>
      <p className="user__address">
        {`address: ${street} ${suite} ${city} ${zipcode}`}
      </p>
    </>
  );
};

User.propTypes = UserShape;
