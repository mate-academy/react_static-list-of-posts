import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="postList">
    <h3 className="postList__title">{user.name}</h3>
    <span className="postList__mail">{user.email}</span>
  </ul>
);
