import React from 'react';

type Props = {
  users: PrepearedPostCommentsUser,
};

export const UserInfo: React.FC<Props> = (props) => {
  const { users } = props;
  const { user } = users;

  return (
    <div>
      <p>
        Name:
        {user ? user.name : null}
      </p>
      <p>
        email:
        {user ? user.email : null}
      </p>
    </div>
  );
};
