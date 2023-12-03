import { User } from '../../types/user';
import './UserInfo.scss';

type UserType = {
  user: User,
};

export const UserInfo = ({ user }: UserType) => {
  return (
    <p>
      {' Posted by '}
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
