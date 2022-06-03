import React from 'react';

import './UserInfo.scss';
import { PropsUser } from '../../type';

export const UserInfo: React.FC <PropsUser> = ({
  user,
}) => (
  <>
    <p>{`User's name is ${user.name}`}</p>
    <p>{`User's email is ${user.email}`}</p>
  </>
);
