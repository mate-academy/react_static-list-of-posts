import { User } from '../../type/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { email, name } = user;

  return (
    <a
      className="UserInfo"
      href={`mailto:${email}`}
    >
      {name}
    </a>
  );
};
