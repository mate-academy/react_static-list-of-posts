import React from 'react';

type Prop = {
  user: User,
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <p className="postList__user">
      {`${user.name} ${user.email}`}
    </p>
  );
};
