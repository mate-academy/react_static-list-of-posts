import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const {
    name,
    email,
    phone,
  } = user;

  return (
    <div className="user">
      <h3 className="user__name">
        {`Name: ${name}`}
      </h3>
      <p className="user__email">
        {`Email: ${email}`}
      </p>
      <p className="user__phone">
        {`Phone: ${phone}`}
      </p>
    </div>
  );
};
