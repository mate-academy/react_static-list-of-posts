import React from 'react';
import { Users } from '../type/Post';

type UserInfoType = {
  user: Users | undefined,
};

export const UserInfo:React.FC<UserInfoType> = ({ user }) => (
  <>
    <div>{`Автор Публікації: ${user?.name}`}</div>
    <div>{`Email: ${user?.email}`}</div>
  </>
);
