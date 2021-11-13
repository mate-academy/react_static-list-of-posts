import { User } from '../../types/User';

type Props = {
  user: User | undefined,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <strong>{user?.name}</strong>
    {' - '}
    <a href={`mailto:${user?.email}`}>{user?.email}</a>
  </>
);
