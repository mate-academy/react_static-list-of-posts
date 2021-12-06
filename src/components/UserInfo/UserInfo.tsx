import React from 'react';
import imageAvatar from '../../images/woman.png';

import { User } from '../../types/user';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="post__user user">
        <img className="user__avatar" src={imageAvatar} alt="user icon" />
        <div className="user__info">
          <div className="user__name">{user.name}</div>
          <div className="user__email">{user.email}</div>
        </div>
      </div>
    </>
  );
};
