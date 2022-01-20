import React from 'react';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span>
      <b>
        {'Owner: '}
        {user?.name}
        {' Email: '}
        {user?.email}
      </b>
    </span>
  </>
);
