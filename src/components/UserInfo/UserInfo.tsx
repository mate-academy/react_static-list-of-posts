import React from 'react';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user && (
    <div>
      <span className="post_user-name">{user.name}</span>
      <br />
      <div className="post_user-email">{user.email}</div>
    </div>
  )
);
