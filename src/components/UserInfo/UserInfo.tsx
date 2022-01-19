import React from 'react';
import { User } from "../types/User";

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <h3>
    {user.name}
    {user.email}
  </h3>
);
