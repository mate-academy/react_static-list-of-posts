import React from 'react';
import { CommentType } from '../../Typedefs';

export const User = ({ user }) => {
  const address = `${user.address.street}
  ${user.address.suite}
  ${user.address.city}
  ${user.address.zipcode}`;

  return (
    <div>
      <h2>
        {user.name}
      </h2>
      <p>
        {user.email}
      </p>
      <p>
        {address}
      </p>
    </div>
  );
};

User.propTypes = {
  user: CommentType.isRequired,
};
