import React from 'react';

import { User } from '../types/User';

type Props = {
  userProps: User | null
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userProps } = props;

  if (!userProps) {
    return (
      <li>
        invalid data
      </li>
    );
  }

  const { name, email } = userProps;

  return (
    <>
      <li className="list__user-name">
        {name}
      </li>
      <li className="list__user-email">
        {email}
      </li>
    </>
  );
};
