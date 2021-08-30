import React from 'react';
import { User } from '../../types/User';
import '../PostsList/PostList.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
    username,
  } = user;

  return (
    <>
      <h3 className="post__user-name">
        {`${username} (${name})`}
      </h3>
      <p className="post__user-email">
        {email}
      </p>
    </>
  );
};

export default UserInfo;
