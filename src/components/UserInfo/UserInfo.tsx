import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { username, name, email } = user;

  return (
    <div className="user">
      <h2>UserInfo:</h2>
      <p>{`User - ${username} ${name}`}</p>
      <p>{`Email - ${email}`}</p>
    </div>
  );
};
