import React from 'react';
import './UserInfo.scss';
import { IUser } from '../../types/Posts';

type Props = {
  user: IUser | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="User">
      {user
        ? (
          <>
            <span className="User__name">{ user?.name }</span>
            <span className="User__email">{ user?.email }</span>
          </>
        ) : (
          <span className="User__not-found">User not found</span>
        )}
    </div>
  </>
);
