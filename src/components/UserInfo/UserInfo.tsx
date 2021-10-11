import React from 'react';
import { User } from '../../Types/User';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <>
    <strong className="post__user-name">{`Author: ${user.name}`}</strong>
    <p className="post__user-email">{`${user.email}`}</p>
  </>
);
