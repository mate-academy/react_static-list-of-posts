import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <a
      className="UserInfo button is-primary is-light ml-1"
      href={`mailto:${email}`}
    >
      {name}
    </a>
  );
};
