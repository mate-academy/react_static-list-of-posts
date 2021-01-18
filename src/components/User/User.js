import React from 'react';

import { UserShape } from '../shapes';

const User = ({ name, email, address }) => (
  <div>
    <span>{name}</span>
    <a href={`mailto:${email}`}>{email}</a>
    <span>
      {`${address.city}, ${address.street}`}
    </span>
  </div>
);

User.propTypes = UserShape.isRequired;

export default User;
