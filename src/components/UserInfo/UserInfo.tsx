import { User } from '../../types';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo = ({ user }: Props) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
