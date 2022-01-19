import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>
);
