import React from 'react';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
  <div className="post-item__user user-data">
    <h3 className="user-data__name">
      {name}
    </h3>
    <p className="user-data__email">
      {email}
    </p>
    <p className="user-data__address">
      {` ${address.street}, ${address.suite},
       ${address.city}, ${address.zipcode}`}
    </p>

  </div>
);

User.propTypes = UserType;
