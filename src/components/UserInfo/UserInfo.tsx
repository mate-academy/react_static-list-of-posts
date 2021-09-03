import React from 'react';
import './UserInfo.scss';

interface Prop {
  user: User;
}

export const UserInfo: React.FC<Prop> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <div className="post__name">
        {`Author: ${name}`}
      </div>
      <div className="post__mail">
        {`E-mail: ${email}`}
      </div>
    </>
  );
};
