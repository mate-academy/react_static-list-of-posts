import { User } from './Type';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>
      {user.name}
    </p>
    <p>
      {`Email: ${user.email}`}
    </p>
  </>
);
