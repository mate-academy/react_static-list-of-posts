import './UserInfo.scss';
import { UsersT } from '../../types';

type Props = {
  user: UsersT
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
