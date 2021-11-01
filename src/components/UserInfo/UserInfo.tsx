import React from 'react';
import { User } from '../../interface/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="user-name">{`author: ${user.name}`}</span>
    <br />
    <span className="user-email">{`author e-mail: ${user.email}`}</span>
  </>
);
