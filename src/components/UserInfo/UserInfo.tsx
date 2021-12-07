import React from 'react';
import style from './UserInfo.module.css';
import { User } from '../../types/Types';

interface Props {
  user: User,
}

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className={style.userInfo}>
    <p className={style.userName}>{user.name}</p>
    <p className={style.userEmail}>{user.email}</p>
  </div>
);

export default UserInfo;
