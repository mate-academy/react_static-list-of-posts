import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <h6 className="User">
    <div className="User__profile-photo" />

    <div>
      {`${user.name} as ${user.username} (mail me: ${user.email})`}
    </div>
  </h6>
);
