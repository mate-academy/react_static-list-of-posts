import React from "react";
import { UserType } from "../../types/UserType";
import './UserInfo.scss';

type Props = {
  userInfo: UserType | null,
};

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <p className="userinfo">
    <span className="userinfo__item">
      {userInfo?.name}
    </span>
    {' '}
    <span className="userinfo__item">
      email: {userInfo?.email}
    </span>
  </p>
);
