import { User } from './Interfaces';

// import { User } from '../../react-app-env';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    {user?.name}
    {' - '}
    {user?.email}
  </div>
);
