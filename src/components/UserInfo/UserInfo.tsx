import React from 'react';

import './UserInfo.scss';

type Props = {
  author: User,
};

export const UserInfo: React.FC<Props> = ({ author }) => (
  <>
    <p>
      {`Name: ${author.name}`}
    </p>

    <p>
      {`email: ${author.email}`}
    </p>
  </>
);
