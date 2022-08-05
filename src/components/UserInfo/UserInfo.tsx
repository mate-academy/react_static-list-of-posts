import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { username, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {username}
    </a>
  );
};
