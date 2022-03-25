import { FC } from 'react';
import { User } from '../../types/User';
import './userInfo.scss';

interface Props {
  user: User
}

export const UserInfo:FC<Props> = ({ user }) => (
  <div className="user-info">
    <span className="user-info__name">
      {`${user.name} `}
    </span>
    <span className="user-info__email">
      {`(${user.email})`}
    </span>
  </div>
);
