import { User } from '../../Types/User';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
