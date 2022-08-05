import { User } from '../../types/users';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user ? user.email : null}`}>
    {user ? user.name : null}
  </a>
);
