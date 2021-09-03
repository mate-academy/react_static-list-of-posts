import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email } = props.user;

  return (
    <div className="user-info">
      <h2>User:</h2>
      <p>
        {`Name: ${name}`}
      </p>
      <p>
        {`Email: ${email}`}
      </p>
    </div>
  );
};
