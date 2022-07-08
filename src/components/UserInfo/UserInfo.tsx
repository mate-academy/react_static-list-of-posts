import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <h3>{name}</h3>
    <a href="mailto:{user.user.email}">{email}</a>
  </>
);

export default UserInfo;
