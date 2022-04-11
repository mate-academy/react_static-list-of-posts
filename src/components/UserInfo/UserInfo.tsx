import { FC } from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <h3 className="user_name">
        {user.name}
      </h3>
      <a href={`mailto:${user.email}`} className="user_mail">
        {user.email}
      </a>
    </div>
  );
};
