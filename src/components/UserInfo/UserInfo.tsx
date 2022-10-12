import { FC } from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Probs = {
  user: User | undefined;
};

export const UserInfo: FC<Probs> = ({ user }) => (
  user
    ? (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
    : <p>No Info</p>
);
