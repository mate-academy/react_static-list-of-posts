import React from 'react';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => {
  const { street, suite, city } = address;

  return (
    <p>
      <i>
        {`Posted by: ${name}, <${email}>, ${city} ${street} ${suite}.`}
      </i>
    </p>
  );
};

User.propTypes = UserType;
