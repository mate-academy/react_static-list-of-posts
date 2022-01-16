import { User } from '../../types/Types';

type UserProps = {
  user: User
};

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <>
    <div className="user__name">{user.name}</div>
    <div className="user__email">{user.email}</div>
  </>
);
