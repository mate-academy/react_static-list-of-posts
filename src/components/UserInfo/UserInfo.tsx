import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <h3>
      {user.name}
    </h3>
    <a href={`mailto:${user.email}`}>
      {`Mail me: ${user.email}`}
    </a>
  </div>
);
