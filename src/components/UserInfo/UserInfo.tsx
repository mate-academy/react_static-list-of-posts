import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 className="user__name">
      {`User: ${user.name}`}
    </h3>

    <p className="user__email">
      {user.email}
    </p>
  </>
);
