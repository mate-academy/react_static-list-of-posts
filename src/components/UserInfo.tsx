import { User } from '../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <i>
    {!user || `${user.name} (${user.email})`}
  </i>
);
