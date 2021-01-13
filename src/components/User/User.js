import React from 'react';
import { UserType } from '../../types';

export const User = ({ userName, userEmail, userAddress }) => {
  const { street, suite, city } = userAddress;

  return (
    <p>
      <i>
        {`Posted by: ${userName}, <${userEmail}>, ${city} ${street} ${suite}.`}
      </i>
    </p>
  );
};

User.propTypes = UserType;
