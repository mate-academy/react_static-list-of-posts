import React from 'react';
import { User } from '../type/Post';

interface Props {
  user: User,
}

export const UserInfo:React.FC<Props> = ({ user }) => (
  <>
    <div>{`Автор Публікації: ${user?.name}`}</div>
    <div>{`Email: ${user?.email}`}</div>
  </>
);
