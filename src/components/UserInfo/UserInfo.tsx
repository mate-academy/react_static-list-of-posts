import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </>
);
