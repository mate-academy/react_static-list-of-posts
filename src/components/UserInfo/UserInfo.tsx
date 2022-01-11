import React from 'react';
import { User } from '../../Types/Types';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = (props) => {
  return (
    <div className="user_info">
      <h4 className="user_info__name">{props.user.name}</h4>
      <a href={props.user.email}>{props.user.email}</a>
    </div>
  );
};
