import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="User">
      <p className="User__name">{`Name: ${name}`}</p>
      <a className="User__email" href={`mailto:${email}`}>{`Email: ${email}`}</a>
    </div>
  );
};
