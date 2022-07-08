import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <div data-cy="user-name">
      {`Name: ${name}`}
    </div>

    <div data-cy="user-email">
      {`Email: ${email}`}
    </div>
  </>
);
