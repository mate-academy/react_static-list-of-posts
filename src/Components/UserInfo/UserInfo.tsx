import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = (({ name, email }) => (
  <div className="post__user user">
    <div className="user__name">{name}</div>
    <div className="user__email">{email}</div>
  </div>
));
