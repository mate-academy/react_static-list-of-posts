import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <>
    <h2>
      {`Name: ${user.name}`}
    </h2>
    <h3>
      {`email: ${user.email}`}
    </h3>
  </>
);
