import React from 'react';
import { UserShape } from '../../shapes/UserShape';

import './User.scss';

export const User = ({ name, email, address }) => (
  <address className="author">
    {`Written by ${name}.`}
    <div>
      <a href={email}>{email}</a>
    </div>
    {`${address.suite}, ${address.street}, ${address.city}`}
  </address>
);

User.propTypes = UserShape;
