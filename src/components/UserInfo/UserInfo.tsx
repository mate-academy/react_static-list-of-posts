import React from 'react';
import { IUser } from '../../types/IUser';

import './UserInfo.scss';

type Props = Pick<IUser, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="userInfo">
      <img className="userInfo__img" src="https://3.bp.blogspot.com/--sCpJJGYWEA/W2P4C51CYSI/AAAAAAAAQcI/LR4U_--Wf1E3wz7RLZtmwBPObm_ky9tQQCLcBGAs/s1600/beautiful-indian-women-photos-1.jpg" alt="" />
      <h5 className="userInfo__name">
        {name}
      </h5>
      <h5 className="userInfo__email">
        {email}
      </h5>
    </div>
  );
};
