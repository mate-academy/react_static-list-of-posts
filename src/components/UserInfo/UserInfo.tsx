import { FC } from 'react';
import { User } from '../types/User';

interface Props {
  user: User | undefined;
}

export const UserInfo: FC<Props> = ({ user }) => {
  return (
    <>
      {user && (
        <div className="user">
          <h3 className="user_name">
            {user.name}
          </h3>
          <a href={`mailto:${user.email}`} className="user_mail">{user.email}</a>
        </div>
      )}
    </>
  );
};
