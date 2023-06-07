import { User } from '../../types/User';

interface UserInfoProps {
  postUser: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({ postUser }) => {
  const {
    name,
    email,
  } = postUser;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
