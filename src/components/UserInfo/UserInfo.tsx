import React from 'react';
import { User } from '../../Types/Types';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = (props) => (
  <div className="user-info">
    <h4 className="user-info__name">{props.user.name}</h4>
    <a href={`mailto:${props.user.email}`}>{props.user.email}</a>
  </div>
);
