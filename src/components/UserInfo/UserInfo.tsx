import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

interface Props {
  user: User | null;
}

export const UserInfo: React.FC<Props> = ({ user }) => (user && (
  <>
    <p className="user-info__username">{user.name}</p>
    <p className="user-info__email">{user.email}</p>
  </>
));
