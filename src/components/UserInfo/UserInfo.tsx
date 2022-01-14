import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user && (
    <>
      <span className="user__name">{user.name}</span>
      <br />
      <span className="user__email">{user.email}</span>
    </>
  )
);
