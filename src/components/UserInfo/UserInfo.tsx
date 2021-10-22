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
            <div className="User__photo" />
            <div className="User__data">
              <div className="User__name">{ user?.name }</div>
              <div className="User__email">{ user?.email }</div>
            </div>
          </>
        ) : (
          <span className="User__not-found">User not found</span>
        )}
    </div>
  </>
);
