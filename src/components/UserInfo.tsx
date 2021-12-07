import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="commentator">
    <strong className="commentatorName">{user.name}</strong>
    <div className="commentatorEmail">{user.email}</div>
  </div>
);
