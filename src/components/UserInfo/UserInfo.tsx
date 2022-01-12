import React from 'react';
import { User } from '../../_types/user';

import './UserInfo.scss';

const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <div className="UserInfo__name">
      {name}
    </div>
    <div className="UserInfo__email">
      {email}
    </div>
  </div>
);

export default UserInfo;
