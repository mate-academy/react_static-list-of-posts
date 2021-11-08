import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

interface Props {
  user: User | null;
}

export const UserInfo: React.FC<Props> = (props) => (props.user && (
  <>
    <p className="user-info__username">{props.user.name}</p>
    <p className="user-info__email">{props.user.email}</p>
  </>
));
