import React from 'react';
import { User } from '../../types/ReadyPosts';
import './UserInfo.scss';
import Email from '../../public/email.png';

type Props = {
  user: User;
};

export const UsersInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <img
        className="UserInfo__image"
        src="https://img.icons8.com/ios/50/000000/badge.png"
        alt="IconName"
      />
      <p className="UserInfo__item">
        {user.name}
      </p>

      <img
        className="UserInfo__image"
        src="https://img.icons8.com/ios/50/000000/username.png"
        alt="IconUserName"
      />
      <p className="UserInfo__item">
        {user.username}
      </p>

      <img
        className="UserInfo__image"
        src={Email}
        alt="IconEmail"
      />
      <p className="UserInfo__item">
        {user.email}
      </p>
    </div>
  );
};
