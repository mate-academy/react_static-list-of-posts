import React from 'react';

import { User } from '../Types';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="post__user-name">
      {`Author: ${user.name}`}
    </div>

    <div className="post__user-email">
      {`Email: ${user.email}`}
    </div>
  </>
);

export default UserInfo;
