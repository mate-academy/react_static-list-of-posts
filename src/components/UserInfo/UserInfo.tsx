import { User } from '../../types/user';

type Userinfo = {
  user: User | null,
};

export const UserInfo: React.FC<Userinfo> = ({ user }) => (
  <>
    {' Posted by  '}

    <a className="UserInfo" href={user?.email}>
      {user?.name}
    </a>
  </>
);
