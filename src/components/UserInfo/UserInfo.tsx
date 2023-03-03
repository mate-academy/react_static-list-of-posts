import { User } from '../../types/Users';

import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
