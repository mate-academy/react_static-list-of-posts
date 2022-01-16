import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span className="username">
      {user.name}
    </span>
    <br />
    <span className="useremail">
      {user.email}
    </span>
  </>
);
