import React from 'react';
import './User.scss';

import { userType } from '../../propTypes/userType';

export const User = ({ name, email, address }) => (
  <div className="post__user">
    <p>{name}</p>
    <p>{email}</p>
    <div>
      {`${address.city}, ${address.street}, ${address.suite}`}
    </div>
  </div>
);

User.propTypes = userType.isRequired;
