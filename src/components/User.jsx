import React from 'react';
import { TypeUser } from '../types';

export const User = ({ user }) => {
  const { name, email } = user;
  const { city, street, suite } = user.address;

  return (
    <div className="text-muted">
      {name}
      <div>
        {email}
      </div>
      <div>
        {`Address: ${city}, ${street}, ${suite}`}
      </div>
    </div>
  );
};

User.propTypes = {
  user: TypeUser.isRequired,
};
