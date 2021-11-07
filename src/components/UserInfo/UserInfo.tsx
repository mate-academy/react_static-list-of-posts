import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => ((
  <div>
    <div>
      {'Written by: '}
      <span className="Post__author">
        {user.name}
      </span>
    </div>
    <div>
      {'Contacts: '}
      <a className="Link" href={`mailto: ${user.email}`}>
        {user.email}
      </a>
    </div>
  </div>
));
