import React from 'react';
import { User } from '../../Types/Types';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = (props) => {
  return (
    <div>
      <h4>{props.user.name}</h4>
      {' - '}
      <a href={props.user.email}>{props.user.email}</a>
    </div>
  );
};
