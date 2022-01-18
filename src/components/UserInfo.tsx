import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="post__author">
      {user.name}
    </span>
    <br />
    <span className="post__authorEmail">
      {user.email}
    </span>
  </>
);
