import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="author">
    <strong className="author__name">{user.name}</strong>
    <div className="author__email">{user.email}</div>
  </div>
);
