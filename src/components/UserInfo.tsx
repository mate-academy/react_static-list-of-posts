import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <p className="user">{`User: ${name} - ${email}`}</p>
);
