import { User } from '../../Types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user: { email, name } }) => (
  <>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </>
);
