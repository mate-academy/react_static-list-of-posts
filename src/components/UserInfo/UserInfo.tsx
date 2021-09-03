import React from 'react';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = (props) => {
  let name;
  let email;

  if (props.user) {
    name = props.user.name;
    email = props.user.email;
  }

  return (
    <>
      {props.user ? (
        <>
          {'My name is: '}
          {name}
          {' and my email is '}
          {email}
        </>
      ) : ''}
    </>
  );
};
