import { User } from '../../types/User';

type UserProps = {
  user: User;
};

export const UserInfo = ({ user: { email, name } }: UserProps) => {
  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
