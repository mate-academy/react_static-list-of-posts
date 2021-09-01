import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string;
  username: string;
  email: string;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email, username } = props;

  return (
    <div className="userInfo">
      <h5 className="userInfo__username">
        {'A post by: '}
        {username}
      </h5>
      <p className="userInfo__name">{name}</p>
      <span className="userInfo__email">{email}</span>
    </div>
  );
};
