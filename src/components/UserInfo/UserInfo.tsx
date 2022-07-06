import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <p data-cy="user-name">
        <strong>{'Name: '}</strong>
        {user.name}
      </p>

      <p data-cy="user-email">
        <strong>{'Email: '}</strong>
        {user.email}
      </p>
    </>
  );
};
