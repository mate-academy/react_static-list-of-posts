import { Posts } from '../../types/Posts';

type Props = Pick<Posts, 'user'>;

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
