import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = props => {
  const {
    name,
    email,
  } = props;

  return (
    <>
      <img src="https://via.placeholder.com/72" alt="ava" />
      <div className="post__user__info">
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </>
  );
};
