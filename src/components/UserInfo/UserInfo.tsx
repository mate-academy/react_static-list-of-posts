import React from 'react';
import { User } from '../../types/type';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="posts__user user">
    <a href="index.html" className="user__link link">{user.username}</a>
    <div className="user__contacts">
      <span>{user.name}</span>
      <a href={`mailto:${user.email}`} className="link">{user.email}</a>
    </div>
  </div>
);
