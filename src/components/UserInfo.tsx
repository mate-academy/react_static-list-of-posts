import { User } from '../types/User';

type Props = {
  user:User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="writer">
    <h2 className="writer__name">{user.name}</h2>
    <h3 className="writer__email">{user.email}</h3>
  </div>
);
