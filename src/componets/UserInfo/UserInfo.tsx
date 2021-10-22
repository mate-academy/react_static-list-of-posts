import React from 'react';
import { User } from '../../types/types';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="post__author">
      <div className="post-author__name">
        {user.name}
      </div>
      <div className="post-author__email">
        {user.email}
      </div>
    </div>
  </>
);
