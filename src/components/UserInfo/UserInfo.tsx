import './UserInfo.scss';
import { User } from '../../types';

type Props = {
  user: User;
};

export const UserInfo = ({ user }: Props) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
