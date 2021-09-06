import React from 'react';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  if (!user) {
    return null;
  }

  const { name, email } = user;

  return (
    <div className="user">
      <p className="user__name">
        Name:
        {` ${name}`}
      </p>

      <p className="user__email">
        Email:
        {` ${email}`}
      </p>
    </div>
  );
};
