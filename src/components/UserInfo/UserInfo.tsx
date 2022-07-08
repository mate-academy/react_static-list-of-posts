import React from 'react';

import 'bulma/css/bulma.min.css';
import { Block, Tag } from 'react-bulma-components';

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <Block>
      <Tag color="link">
        <p data-cy="user-name">
          {user.name}
        </p>
      </Tag>
      <Tag color="success">
        <p data-cy="user-email">
          {user.email}
        </p>
      </Tag>
    </Block>
  );
};
