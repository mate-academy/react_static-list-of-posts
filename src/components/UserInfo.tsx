import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="post__author">
    {user?.name}
    {' Email: '}
    {user?.email}
  </div>
);
