// import React from 'react';
import Users from '../../api/users';
import { Post } from '../../types/post';

type PostType = {
  user: Post,
};

export const UserInfo = ({ user }: PostType) => {
  const person = Users.find(per => per.id === user.userId);

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${person?.email}`}>
        {person?.name}
      </a>
    </p>
  );
};
