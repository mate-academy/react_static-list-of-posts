import React from 'react';
import User from '../types/User';

export const UserInfo: React.FC<User> = ({
  name, email,
}) => (
  <div className="Post__info">
    <div className="Post__info-author">
      {name}
    </div>
    <div className="Post__info-email">
      {email}
    </div>
  </div>
);
