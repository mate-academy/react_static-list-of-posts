import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, username, email } = user;
  const mailtoLink = `mailto:${email}`;

  return (
    <>
      <p>
        {` Posted by ${username}`}

        <a className="UserInfo" href={mailtoLink}>
          {name}
        </a>
      </p>
    </>
  );
};
