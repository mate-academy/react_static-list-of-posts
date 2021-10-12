import React from 'react';
import { User } from '../types/User';

interface Props {
  user: User;
}

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="details">
    {user && (
      <>
        <span className="post-detail">{user.name}</span>
        <span className="post-detail">{user.email}</span>
      </>
    )}

  </div>
);

export default UserInfo;
