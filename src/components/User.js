import React from 'react';
import { UserShape } from './shapes/UserShape';

export const User = (props) => {
  const { name, address, email } = props;
  const { street, suite, city, zipcode } = address;

  return (
    <div className="user">
      <p>{name}</p>
      <p>
        {`email: ${email}`}
      </p>
      <p>
        {`address: ${street} ${suite} ${city} ${zipcode}`}
      </p>
    </div>
  );
};

User.propTypes = UserShape;
