import { FC } from 'react';
import { User } from '../../types';

interface Props {
  user: User;
}

export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <h4 className="UserInfo__title">
        {user?.name}
      </h4>
      <a
        className="UserInfo__email"
        href={`{mailto:${user.email}}`}
      >
        {user.email}
      </a>
    </div>
  );
};
