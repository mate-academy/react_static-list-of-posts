import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC <Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <>
      <div className="section__user">
        <p>
          <b>Name: </b>
          {name}
        </p>
        <p>
          <b>Email: </b>
          {email}
        </p>
      </div>
    </>
  );
};
