import { User } from '../../types/User';

interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <p className="subtitle is-5 mb-3 has-text-grey">
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
