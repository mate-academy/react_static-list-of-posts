import React from 'react';
import { User } from '../../app.typedefs';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="user-name" className="user-info__item">{`Username: ${user.name}`}</p>
    <p
      data-cy="user-email"
      className="user-info__item user-info__item--last"
    >
      {`Email: ${user.email}`}
    </p>
  </>
);
