import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info-container">
    <p>{`User: ${user.name}`}</p>
    <p>{`Email: ${user.email}`}</p>
  </div>
);

export default UserInfo;
