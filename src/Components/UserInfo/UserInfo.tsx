import React from 'react';
import { User } from '../../api/Types/Interfaces';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="postList__post-author">
    <div className="postList__post-author__name">
      {user.name}
    </div>
    <div className="post__author-email">
      {user.email}
    </div>
  </div>
);
