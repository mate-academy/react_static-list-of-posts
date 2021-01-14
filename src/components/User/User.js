import React from 'react';

import { UserShape } from '../shapes';

const User = ({ user }) => (
  <div>
    <span>{user.name}</span>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <span>
      {`${user.address.city}, ${user.address.street}`}
    </span>
  </div>
);

User.propTypes = {
  user: UserShape.isRequired,
};

export default User;
