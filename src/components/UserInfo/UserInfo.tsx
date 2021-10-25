import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/Posts';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="user">
      {user
        ? (
          <>
            <div className="user__photo" />
            <div className="user__data">
              <div className="user__name">{ user?.name }</div>
              <div className="user__email">{ user?.email }</div>
            </div>
          </>
        ) : (
          <span className="user__not-found">User not found</span>
        )}
    </div>
  </>
);
