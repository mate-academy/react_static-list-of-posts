import React from 'react';
import { User } from '../Types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="user__name">
      {`Username: ${user.name}`}
    </div>

    <div className="user__email">
      {`Email: ${user.email}`}
    </div>
  </>
);
