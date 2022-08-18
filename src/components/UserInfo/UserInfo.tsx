import { Users } from '../../types/Users';

type Props = {
  users: Users [];
};

export const UserInfo: React.FC<Props> = ({ users }) => (
  <>
    {users.map(user => (
      <a
        className="UserInfo"
        href={`mailto:${user.email}`}
        key={user.id}
      >
        {user.name}
      </a>
    ))}
  </>
);
