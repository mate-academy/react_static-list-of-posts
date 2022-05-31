import React from 'react';

import './UserInfo.scss';
import { Prepared } from '../../type';

export const UserInfo: React.FC <Prepared> = ({
  user,
}) => (
  <>
    <p>{`User's name is ${user?.name}`}</p>
    <p>{`User's email is ${user?.email}`}</p>
  </>
);
