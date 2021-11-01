import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {`Author: ${user.name} -- ${user.email}`}
  </>
);
