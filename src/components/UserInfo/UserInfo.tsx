import { User } from '../../typedefs';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="posts__item-main-name">{user?.name}</p>
    <p className="posts__item-main-email">{user?.email}</p>
  </>
);
